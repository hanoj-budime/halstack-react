import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import DxcNewInputText from "../new-input-text/NewInputText";
import NumberContext from "./NumberContext";
import { spaces } from "../common/variables.js";

const DxcNumber = React.forwardRef(
  (
    {
      label = "",
      name = "",
      value,
      helperText = "",
      placeholder = "",
      disabled = false,
      optional = false,
      prefix = "",
      suffix = "",
      min,
      max,
      step,
      onChange,
      onBlur,
      error = "",
      autocomplete = "off",
      margin,
      size = "medium",
      tabIndex = 0,
    },
    ref
  ) => {
    return (
      <NumberContext.Provider value={{ typeNumber: "number", minNumber: min, maxNumber: max, stepNumber: step }}>
        <NumberContainer>
          <DxcNewInputText
            label={label}
            name={name}
            value={value}
            helperText={helperText}
            placeholder={placeholder}
            disabled={disabled}
            optional={optional}
            prefix={prefix}
            suffix={suffix}
            error={error}
            onChange={onChange}
            onBlur={onBlur}
            autocomplete={autocomplete}
            margin={margin}
            size={size}
            tabIndex={tabIndex}
            ref={ref}
          />
        </NumberContainer>
      </NumberContext.Provider>
    );
  }
);

const sizes = {
  small: "240px",
  medium: "360px",
  large: "480px",
  fillParent: "100%",
};

const NumberContainer = styled.div`
  // Chrome, Safari, Edge, Opera
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  // Firefox
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

DxcNumber.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  helperText: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  optional: PropTypes.bool,
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({ type: PropTypes.oneOf(["svg"]) })]),
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({ type: PropTypes.oneOf(["svg"]) })]),
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
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

export default DxcNumber;
