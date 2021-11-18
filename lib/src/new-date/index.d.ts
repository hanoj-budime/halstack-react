type Size = "small" | "medium" | "large" | "fillParent";
type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type Props = {
  /**
   * Text to be placed above the date.
   */
  label?: string;
  /**
   * Name attribute of the input element.
   */
  name?: string;
  /**
   * Value of the input element. If undefined, the component will be uncontrolled and the value will be managed internally by the component.
   */
  value?: string;
  /**
   * The format in which the date value will be displayed. User must use this format when editing the value or it will be considered as an invalid date.
   */
  format?: string;
  /**
   * Helper text to be placed above the date.
   */
  helperText?: string;
  /**
   * If true, the date format will appear as placeholder in the field.
   */
  placeholder?: boolean;
  /**
   * If true, the date will have an action to clear the entered value.
   */
  clearable?: boolean;
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * If true, the date will be optional, showing (Optional) next to the label.
   */
  optional?: boolean;
  /**
   * This function will be called when the user types within the input element of the component.
   * An object including the current string value and the date value will be passed to this function.
   * If the string value is not a valid date, date will be null.
   */
  onChange?: (value: string) => void;
  /**
   * This function will be called when the input element loses the focus. An object including the string value, the error and the date value will be passed to this function.
   * If the string value is a valid date, error will be null. Also, if the string value is not a valid date, date will be null.
   */
  onBlur?: (val: { value: string; error: string }) => void;
  /**
   * If it is defined, the component will change its appearance, showing the error below the date component. If it is not defined, the error messages will be created and managed internally.
   */
  error?: string;
  /**
   * HTML autocomplete attribute. Lets the user specify if any permission the user agent has to provide automated assistance in filling out the input value.
   * Its value must be one of all the possible values of the HTML autocomplete attribute: 'on', 'off', 'email', 'username', 'new-password', ...
   */
  autocomplete?: string;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Size of the component ('medium' | 'large' | 'fillParent').
   */
  size?: Size;
  /**
   * Value of the tabindex attribute.
   */
  tabIndex?: number;
  /**
   * Reference to the component.
   */
  ref?: React.RefObject<HTMLDivElement>;
};

export default function DxcNewDate(props: Props): JSX.Element;
