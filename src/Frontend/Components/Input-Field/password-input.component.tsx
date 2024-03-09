import { Icon, Input, Text } from "@ui-kitten/components";
import { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";

const PasswordInput = (): React.ReactElement => {
  const [value, setValue] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const toggleSecureEntry = (): void => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props): React.ReactElement => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Text {...props}>{secureTextEntry ? "🙈" : "🐵"}</Text>
    </TouchableWithoutFeedback>
  );

  return (
    <Input
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
