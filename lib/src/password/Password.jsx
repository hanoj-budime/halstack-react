import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme.js";
import DxcNewInputText from "../new-input-text/NewInputText";
import { spaces } from "../common/variables.js";
import "./styles.css";

const DxcPassword = ({
  label = "",
  value,
  helperText = "",
  error = "",
  clearable = false,
  onChange,
  onBlur,
  margin,
  length = { min: 0, max: 1000 },
  pattern,
}) => {
  const colorsTheme = useTheme();
  const inputRef = useRef(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const setInputType = (type) => {
    inputRef.current.children[2].children[0].setAttribute("type", type);
  };

  useEffect(() => {
    setInputType("password");
  }, []);

  const viewPassword = () => {
    setInputType("text");
    setIsPasswordVisible(true);
  };

  const hidePassword = () => {
    setInputType("password");
    setIsPasswordVisible(false);
  };

  const action = {
    onClick: isPasswordVisible ? hidePassword : viewPassword,
    icon: isPasswordVisible ? (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
        <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z" />
      </svg>
    ),
  };

  return (
    <ThemeProvider theme={colorsTheme.password}>
      <PasswordContainer isPasswordVisible={isPasswordVisible}>
        <DxcNewInputText
          ref={inputRef}
          label={label}
          value={value}
          helperText={helperText}
          action={action}
          error={error}
          clearable={clearable}
          onChange={onChange}
          onBlur={onBlur}
          margin={margin}
          pattern={pattern}
          length={length}
        />
      </PasswordContainer>
    </ThemeProvider>
  );
};

const PasswordContainer = styled.div`
  input[type="password"] {
    font-size: ${(props) => !props.isPasswordVisible && props.theme.dotsSize};
  }
`;

DxcPassword.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.string,
  clearable: PropTypes.bool,
  requirements: PropTypes.array,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
  pattern: PropTypes.string,
  length: PropTypes.shape({ min: PropTypes.number, max: PropTypes.number }),
};

export default DxcPassword;
