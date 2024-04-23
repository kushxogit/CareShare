import { Button, ButtonProps } from "@ui-kitten/components";
import React from "react";
import { PropsWithChildren } from "react";

interface TextButtonProps extends ButtonProps {
  buttonStyle?: ButtonProps["style"];
}

const TextButton: React.FC<PropsWithChildren<TextButtonProps>> = ({
  children,
  buttonStyle,
  ...otherProps
}) => {
  return (
    <Button
      {...otherProps}
      style={[
        {
          backgroundColor: "transparent",
          borderWidth: 0,
        },
        buttonStyle,
      ]}
    >
      {children}
    </Button>
  );
};

export default TextButton;
