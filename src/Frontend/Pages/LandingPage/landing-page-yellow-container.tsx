import { Layout } from "@ui-kitten/components";
import React from "react";
import { Image } from "react-native";

const LandingPageYellowContainer: React.FC = () => {
  return (
    <Layout
      style={{
        position: "absolute",
        top: 0,
        width: "100%",
        height: "80%",
        backgroundColor: "#FAAE2B",
        overflow: "hidden",
      }}
    >
      <Image
        source={require("../../../../assets/CareShareTextPNG.png")}
        style={{
          width: 300,
          height: 300,
          top: "30%",
          left: "50%",
          transform: [{ translateX: -150 }, { translateY: -150 }],
        }}
      />
      <Image
        source={require("../../../../assets/careshare-logo.png")}
        style={{
          width: 200,
          height: 200,
          top: "10%",
          left: "50%",
          transform: [{ translateX: -100 }, { translateY: -150 }],
        }}
      />
    </Layout>
  );
};

export default LandingPageYellowContainer;
