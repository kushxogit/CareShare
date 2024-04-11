import { Button, Layout, Text } from "@ui-kitten/components";
import PrimaryButton from "../../Components/Buttons/button.component";
import ButtonText from "../../Components/Buttons/button-text.component";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const LandingPageButtonContainer: React.FC = () => {
  const navigation = useNavigation<NavigationType>();

  return (
    <Layout
      style={{
        paddingTop: 70,
        display: "flex",
        flex: 1,
        zIndex: 2,
        bottom: 0,
        width: "100%",
        height: "30%",
        position: "absolute",
        backgroundColor: "white",
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
      }}
    >
      <PrimaryButton onPress={() => navigation.navigate("DashBoard")}>
        <ButtonText>SignUp</ButtonText>
      </PrimaryButton>
      <Layout
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          margin: 16,
        }}
      >
        <Text>Already have an account?</Text>
        <PrimaryButton onPress={() => navigation.navigate("LogIn")}>
          <ButtonText>Login</ButtonText>
        </PrimaryButton>
      </Layout>
    </Layout>
  );
};

export default LandingPageButtonContainer;
