import { Layout } from "@ui-kitten/components";
import React from "react";
import LandingPageYellowContainer from "./landing-page-yellow-container";
import LandingPageButtonContainer from "./landing-page-button-container";

const LandingPage: React.FC = ({}) => {
  return (
    <>
      <Layout style={{ flex: 1 }}>
        <LandingPageYellowContainer />
        <LandingPageButtonContainer />
      </Layout>
    </>
  );
};

export default LandingPage;
