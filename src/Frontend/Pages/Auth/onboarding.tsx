import React from "react";
import { View, Text, Button } from "react-native";
import TopYellowContainer from "./logo-top-yellow-container"; // Import the logo component
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import PrimaryButton from "src/Frontend/Components/Buttons/button.component";
import ButtonText from "src/Frontend/Components/Buttons/button-text.component";

const SignUpSuccess: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("../../../../assets/careshare-logo.png")}
        style={{
          width: 200,
          height: 100,
          position: "absolute",
          top: "45%",
          left: "60%",
          transform: [{ translateX: -140 }, { translateY: -159 }],
        }}
      />
      <Text style={{ fontSize: 24, margin: 20 }}>
        Nice one! You're all signed up.
      </Text>
      <PrimaryButton onPress={() => navigation.navigate("LogIn")}>
        <ButtonText>Let's Go!</ButtonText>
      </PrimaryButton>
    </View>
  );
};

export default SignUpSuccess;
