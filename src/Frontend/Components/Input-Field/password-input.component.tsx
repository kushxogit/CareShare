import { Icon, Input, InputProps, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";

interface PasswordInputProps extends InputProps {
  formikProps: any;
}

const PasswordInput = ({ formikProps, ...otherProps }): React.ReactElement => {
  const { values, handleChange, handleBlur } = formikProps;
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const toggleSecureEntry = (): void => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (iconProps): React.ReactElement => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Text {...iconProps}>{secureTextEntry ? "🙈" : "🐵"}</Text>
    </TouchableWithoutFeedback>
  );

  return (
    <Input
      {...otherProps}
      size="large"
      value={values.password}
      placeholder="Password"
      accessoryRight={renderIcon}
      secureTextEntry={secureTextEntry}
      onChangeText={handleChange("password")}
      onBlur={handleBlur("password")}
    ></Input>
  );
};

export default PasswordInput;
