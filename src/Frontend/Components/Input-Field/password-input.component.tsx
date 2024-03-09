import { Icon, Input, InputProps, Text } from "@ui-kitten/components";
import { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";

interface PasswordInputProps extends InputProps {}

const PasswordInput = ({ ...otherProps }): React.ReactElement => {
  const [value, setValue] = useState("");
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
      value={value}
      placeholder="Password"
      accessoryRight={renderIcon}
      secureTextEntry={secureTextEntry}
      onChangeText={(nextValue) => setValue(nextValue)}
    ></Input>
  );
};

export default PasswordInput;
