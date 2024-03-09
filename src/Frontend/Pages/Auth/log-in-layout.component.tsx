import { Input, Layout, Text } from "@ui-kitten/components";
import TopYellowContainer from "./logo-top-yellow-container";
import { useState } from "react";
import PasswordInput from "src/Frontend/Components/Input-Field/password-input.component";
import PrimaryButton from "src/Frontend/Components/Buttons/button.component";
import ButtonText from "src/Frontend/Components/Buttons/button-text.component";

const LogInLayout: React.FC = () => {
  const [name, setName] = useState<string>(null);
  return (
    <Layout style={{ flex: 1, width: "100%", height: "100%" }}>
      <TopYellowContainer />
      <Layout style={{ flex: 1, margin: 24, gap: 48 }}>
        <Text category="h1">Log In</Text>
        <Layout style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <Input
            size="large"
            placeholder="Email"
            value={name}
            onChangeText={(nextValue) => setName(nextValue)}
          />
          <PasswordInput />
          <PrimaryButton fullWidth={true}>
            <ButtonText>Let's Donate</ButtonText>
          </PrimaryButton>
          <Text>Forgot your Password?</Text>
        </Layout>
      </Layout>
      <Layout
        style={{
          margin: 24,
          alignItems: "center",
        }}
      >
        <Text>OR</Text>
        <PrimaryButton fullWidth={true}>
          <ButtonText>Sign Up</ButtonText>
        </PrimaryButton>
      </Layout>
    </Layout>
  );
};
export default LogInLayout;
