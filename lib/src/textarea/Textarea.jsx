import React, { useContext, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { getMargin } from "../common/utils.js";
import useTheme from "../useTheme.js";
import PropTypes from "prop-types";
import { spaces } from "../common/variables.js";
import { v4 as uuidv4 } from "uuid";
import BackgroundColorContext from "../BackgroundColorContext.js";
import { useLayoutEffect } from "react";

const getNotOptionalErrorMessage = () => `This field is required. Please, enter a value.`;

const getPatternErrorMessage = () => `Please match the format requested.`;

const patternMatch = (pattern, value) => new RegExp(pattern).test(value);

const DxcTextarea = React.forwardRef(
  (
    {
      label = "",
      name = "",
      value,
      helperText = "",
      placeholder = "",
      disabled = false,
      optional = false,
      verticalGrow = "auto",
      rows = 4,
      onChange,
      onBlur,
      error = "",
      pattern,
      minLength,
      maxLength,
      autocomplete = "off",
      margin,
      size = "medium",
      tabIndex = 0,
    },
    ref
  ) => {
    const [innerValue, setInnerValue] = useState("");
    const [textareaId] = useState(`textarea-${uuidv4()}`);

    const colorsTheme = useTheme();
    const backgroundType = useContext(BackgroundColorContext);

    const textareaRef = useRef(null);
    const errorId = `error-message-${textareaId}`;

    const getLengthErrorMessage = () => `Min length ${minLength}, max length ${maxLength}.`;

    const isNotOptional = (value) => value === "" && !optional;

    const isLengthIncorrect = (value) =>
      value !== "" && minLength && maxLength && (value.length < minLength || value.length > maxLength);

    const changeValue = (newValue) => {
      value ?? setInnerValue(newValue);

      if (isNotOptional(newValue)) onChange?.({ value: newValue, error: getNotOptionalErrorMessage() });
      else if (isLengthIncorrect(newValue)) onChange?.({ value: newValue, error: getLengthErrorMessage() });
      else if (newValue && pattern && !patternMatch(pattern, newValue))
        onChange?.({ value: newValue, error: getPatternErrorMessage() });
      else onChange?.({ value: newValue, error: null });
    };

    const handleTOnBlur = (event) => {
      if (isNotOptional(event.target.value))
        onBlur?.({ value: event.target.value, error: getNotOptionalErrorMessage() });
      else if (isLengthIncorrect(event.target.value))
        onBlur?.({ value: event.target.value, error: getLengthErrorMessage() });
      else if (event.target.value && pattern && !patternMatch(pattern, event.target.value))
        onBlur?.({ value: event.target.value, error: getPatternErrorMessage() });
      else onBlur?.({ value: event.target.value, error: null });
    };

    const handleTOnChange = (event) => {
      changeValue(event.target.value);
    };

    useLayoutEffect(() => {
      if (verticalGrow === "auto") {
        const textareaLineHeight = parseInt(window.getComputedStyle(textareaRef.current)["line-height"]);
        const textareaPaddingTopBottom = parseInt(window.getComputedStyle(textareaRef.current)["padding-top"]) * 2;
        textareaRef.current.style.height = `${textareaLineHeight * rows}px`;
        const newHeight = textareaRef.current.scrollHeight - textareaPaddingTopBottom;
        textareaRef.current.style.height = `${newHeight}px`;
      }
    }, [value, verticalGrow, rows, innerValue]);

    return (
      <ThemeProvider theme={colorsTheme.textarea}>
        <TextareaContainer margin={margin} size={size} ref={ref}>
          <Label htmlFor={textareaId} disabled={disabled} backgroundType={backgroundType}>
            {label} {optional && <OptionalLabel>(Optional)</OptionalLabel>}
          </Label>
          <HelperText disabled={disabled} backgroundType={backgroundType}>
            {helperText}
          </HelperText>
          <Textarea
            id={textareaId}
            name={name}
            value={value ?? innerValue}
            placeholder={placeholder}
            verticalGrow={verticalGrow}
            rows={rows}
            onChange={handleTOnChange}
            onBlur={handleTOnBlur}
            disabled={disabled}
            error={error}
            minLength={minLength}
            maxLength={maxLength}
            autoComplete={autocomplete}
            backgroundType={backgroundType}
            ref={textareaRef}
            tabIndex={tabIndex}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? errorId : undefined}
            aria-required={optional ? "false" : "true"}
          />
          {!disabled && (
            <Error id={errorId} backgroundType={backgroundType}>
              {error}
            </Error>
          )}
        </TextareaContainer>
      </ThemeProvider>
    );
  }
);

const sizes = {
  small: "240px",
  medium: "360px",
  large: "480px",
  fillParent: "100%",
};

const calculateWidth = (margin, size) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : sizes[size];

const TextareaContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: ${(props) => calculateWidth(props.margin, props.size)};
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
`;

const Label = styled.label`
  color: ${(props) =>
    props.disabled
      ? props.backgroundType === "dark"
        ? props.theme.disabledLabelFontColorOnDark
        : props.theme.disabledLabelFontColor
      : props.backgroundType === "dark"
      ? props.theme.labelFontColorOnDark
      : props.theme.labelFontColor};

  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.labelFontSize};
  font-style: ${(props) => props.theme.labelFontStyle};
  font-weight: ${(props) => props.theme.labelFontWeight};
  line-height: ${(props) => props.theme.labelLineHeight};
`;

const OptionalLabel = styled.span`
  font-weight: ${(props) => props.theme.optionalLabelFontWeight};
`;

const HelperText = styled.span`
  color: ${(props) =>
    props.disabled
      ? props.backgroundType === "dark"
        ? props.theme.disabledHelperTextFontColorOnDark
        : props.theme.disabledHelperTextFontColor
      : props.backgroundType === "dark"
      ? props.theme.helperTextFontColorOnDark
      : props.theme.helperTextFontColor};

  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.helperTextFontSize};
  font-style: ${(props) => props.theme.helperTextFontStyle};
  font-weight: ${(props) => props.theme.helperTextFontWeight};
  line-height: ${(props) => props.theme.helperTextLineHeight};
`;

const Textarea = styled.textarea`
  ${(props) => {
    if (props.verticalGrow === "none") return "resize: none;";
    else if (props.verticalGrow === "auto") return `resize: none; overflow: hidden;`;
    else if (props.verticalGrow === "manual") return "resize: vertical;";
    else return `resize: none;`;
  }};
  ${(props) => {
    if (props.disabled)
      return props.backgroundType === "dark"
        ? `background-color: ${props.theme.disabledContainerFillColorOnDark};`
        : `background-color: ${props.theme.disabledContainerFillColor};`;
    else return `background-color: transparent;`;
  }}

  margin: ${(props) => `${props.theme.inputMarginTop} 0 ${props.theme.inputMarginBottom} 0`};
  padding: 0.5rem 1rem;
  box-shadow: 0 0 0 2px transparent;
  border-radius: 0.25rem;
  border: 1px solid
    ${(props) => {
      if (props.disabled)
        return props.backgroundType === "dark"
          ? props.theme.disabledBorderColorOnDark
          : props.theme.disabledBorderColor;
      else
        return props.backgroundType === "dark" ? props.theme.enabledBorderColorOnDark : props.theme.enabledBorderColor;
    }};
  ${(props) =>
    props.error &&
    !props.disabled &&
    `border-color: transparent;
     box-shadow: 0 0 0 2px ${
       props.backgroundType === "dark" ? props.theme.errorBorderColorOnDark : props.theme.errorBorderColor
     };
  `}

  ${(props) => props.disabled && "cursor: not-allowed;"};
  ${(props) =>
    !props.disabled &&
    `
      &:hover {
        border-color: ${
          props.error
            ? "transparent"
            : props.backgroundType === "dark"
            ? props.theme.hoverBorderColorOnDark
            : props.theme.hoverBorderColor
        };
        ${
          props.error &&
          `box-shadow: 0 0 0 2px ${
            props.backgroundType === "dark"
              ? props.theme.hoverErrorBorderColorOnDark
              : props.theme.hoverErrorBorderColor
          };`
        }
      }
      &:focus {
        outline: none;
        border-color: transparent;
        box-shadow: 0 0 0 2px ${
          props.backgroundType === "dark" ? props.theme.focusBorderColorOnDark : props.theme.focusBorderColor
        };
      }
      &:focus-within {
        outline: none;
        border-color: transparent;
        box-shadow: 0 0 0 2px ${
          props.backgroundType === "dark" ? props.theme.focusBorderColorOnDark : props.theme.focusBorderColor
        };
      }
    `};

  color: ${(props) =>
    props.disabled
      ? props.backgroundType === "dark"
        ? props.theme.disabledValueFontColorOnDark
        : props.theme.disabledValueFontColor
      : props.backgroundType === "dark"
      ? props.theme.valueFontColorOnDark
      : props.theme.valueFontColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.valueFontSize};
  font-style: ${(props) => props.theme.valueFontStyle};
  font-weight: ${(props) => props.theme.valueFontWeight};
  line-height: 1.5em;

  ::placeholder {
    color: ${(props) =>
      props.disabled
        ? props.backgroundType === "dark"
          ? props.theme.disabledPlaceholderFontColorOnDark
          : props.theme.disabledPlaceholderFontColor
        : props.backgroundType === "dark"
        ? props.theme.placeholderFontColorOnDark
        : props.theme.placeholderFontColor};
  }
`;

const Error = styled.span`
  color: ${(props) =>
    props.backgroundType === "dark" ? props.theme.errorMessageColorOnDark : props.theme.errorMessageColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 0.75rem;
  font-weight: 400;
  min-height: 1.5em;
  line-height: 1.5em;
`;

DxcTextarea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  helperText: PropTypes.string,
  placeholder: PropTypes.string,
  verticalGrow: PropTypes.oneOf(["auto", "none", "manual"]),
  rows: PropTypes.number,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  pattern: PropTypes.string,
  disabled: PropTypes.bool,
  optional: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  autocomplete: PropTypes.string,
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
  size: PropTypes.oneOf([...Object.keys(sizes)]),
  tabIndex: PropTypes.number,
};

export default DxcTextarea;
