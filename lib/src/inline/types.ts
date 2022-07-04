type Props = {
  /**
   * Alignment applied to children in the main axis.
   */
  alignX?: "start" | "end" | "center";
  /**
   * Alignment applied to children in the cross axis.
   */
  alignY?: "start" | "end" | "center" | "baseline" | "stretch";
  /**
   * Specifies the HTML tag or component that is rendered as the wrapper element.
   */
  as?: React.ElementType;
  /**
   * If true, a divider is shown between each child.
   */
  divider?: boolean;
  /**
   * Space applied between each child.
   */
  gutter?: "0rem" | "0.125rem" | "0.25rem" | "0.5rem" | "0.75rem" | "1rem" | "1.5rem" | "2rem";
  /**
   * If true, it changes the direction of the inline to reverse.
   */
  reverse?: boolean;
  /**
   * Custom content inside the stack.
   */
  children: React.ReactElement<React.ReactNode>[] | React.ReactElement<React.ReactNode>;
};

export default Props;
