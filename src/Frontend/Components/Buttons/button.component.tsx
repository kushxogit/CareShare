import React from "react";
import {
  Button,
  ButtonProps,
  Layout,
  LayoutProps,
} from "@ui-kitten/components";
import { PropsWithChildren } from "react";
import { GestureResponderEvent } from "react-native";

interface PrimaryButtonProps extends ButtonProps {
  buttonStyle?: ButtonProps["style"];
  fullWidth?: boolean;
}

const PrimaryButton: React.FC<PropsWithChildren<PrimaryButtonProps>> = ({
  children,
  style,
  buttonStyle,
  onPress,
  fullWidth = false,
  ...otherProps
}) => {
  return (
    <Button
      {...otherProps}
      onPress={onPress}
      style={[
        {
          display: "flex",
          margin: 16,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          backgroundColor: "#FAAE2B",
          borderWidth: 0,
          width: fullWidth ? "100%" : "auto",
        },
        buttonStyle,
      ]}
    >
      {children as string}
    </Button>
  );
};

export default PrimaryButton;
