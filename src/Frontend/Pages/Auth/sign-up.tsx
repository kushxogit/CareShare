import { Layout, Text } from "@ui-kitten/components";
import LogInLayout from "./log-in-layout.component";
import SignUpLayout from "./sign-up-layout.component";

function SignUpPage() {
  return (
    <Layout style={{ width: "100%", height: "100%" }}>
      <SignUpLayout />
    </Layout>
  );
}

export default SignUpPage;
