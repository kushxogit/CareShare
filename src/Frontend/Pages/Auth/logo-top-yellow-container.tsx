import { Layout } from "@ui-kitten/components";
import React from "react";
import { Image } from "react-native";

const TopYellowContainer: React.FC = () => {
  return (
    <Layout
      style={{ width: "100%", height: "25%", backgroundColor: "#FAAE2B" }}
    >
      <Image
        source={require("../../../../assets/CareShareTextPNG.png")}
        style={{
          width: 200, // Scaled down
          height: 200, // Scaled down
          position: "absolute",
          top: "50%",
          left: "35%", // Adjusted for side by side positioning
          transform: [{ translateX: -70 }, { translateY: -75 }], // Adjusting by half the new size of the image
        }}
      />
      <Image
        source={require("../../../../assets/careshare-logo.png")}
        style={{
          width: 100, // Scaled down
          height: 100, // Scaled down
          position: "absolute",
          top: "50%",
          left: "65%", // Adjusted for side by side positioning
          transform: [{ translateX: -35 }, { translateY: -35 }], // Adjusting by half the new size of the image
        }}
      />
    </Layout>
  );
};

export default TopYellowContainer;
