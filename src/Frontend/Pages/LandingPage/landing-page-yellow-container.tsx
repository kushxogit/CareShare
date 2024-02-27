import { Layout } from "@ui-kitten/components";
import { SvgUri } from "react-native-svg";

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
      <SvgUri
        height={200}
        width={200}
        uri={
          "https://github.com/kushxogit/CareShare/blob/frontend-landing-page/assets/CareShareLogo.svg"
        }
      />
    </Layout>
  );
};

export default LandingPageYellowContainer;
