
import React from "react";
import { Layout } from "@ui-kitten/components";
import ImagePart from "./image";
import FormComponent from "./form";

const Food = () => {
  return (
    <Layout style={{height: "100%" }}>
      <ImagePart />
      <Layout style={{ top:0}}>
        <FormComponent />
      </Layout>
    </Layout>
  );
};

export default Food;
