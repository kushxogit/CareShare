import React from "react";
import { Layout, Text, TextProps } from "@ui-kitten/components";
import { PropsWithChildren } from "react";

interface ButtonTextProps extends TextProps {
  textStyle?: TextProps["style"];
}

const ButtonText: React.FC<PropsWithChildren<ButtonTextProps>> = ({
  children,
  style,
  textStyle,
  ...otherProps
}) => {
  return (
    <Layout style={{ backgroundColor: "transparent" }}>
      <Text
        {...otherProps}
        style={[{ fontSize: 18, color: "#00473E" }, textStyle]}
      >
        {children as string}
      </Text>
    </Layout>
  );
};

export default ButtonText;
