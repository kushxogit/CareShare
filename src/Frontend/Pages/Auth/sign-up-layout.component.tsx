import { Input, Layout, Text, Button } from "@ui-kitten/components";
import TopYellowContainer from "./logo-top-yellow-container";
import { useState } from "react";
import PasswordInput from "src/Frontend/Components/Input-Field/password-input.component";
import PrimaryButton from "src/Frontend/Components/Buttons/button.component";
import ButtonText from "src/Frontend/Components/Buttons/button-text.component";
import { useFormik } from "formik";
import * as Yup from "yup";
import constant from "src/Frontend/Constants/validation";
import React from "react";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required(constant.CANNOT_BE_EMPTY),
  phoneNumber: Yup.number().required(constant.CANNOT_BE_EMPTY),
  email: Yup.string()
    .email(constant.INVALID_EMAIL)
    .required(constant.CANNOT_BE_EMPTY),
  password: Yup.string().min(8, constant.INVALID_PASSWORD),
});

const SignUpLayout: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
    validationSchema: SignupSchema,
  });

  return (
    <Layout style={{ flex: 1, width: "100%", height: "100%" }}>
      <TopYellowContainer />
      <Layout style={{ flex: 1, margin: 24, gap: 48 }}>
        <Text category="h1">Sign Up</Text>
        <Layout style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <Input
            size="large"
            placeholder="Name"
            value={formik.values.name}
            onChangeText={formik.handleChange("name")}
            onBlur={formik.handleBlur("name")}
          />
          {formik.touched.name && formik.errors.name && (
            <Text status="danger">{formik.errors.name}</Text>
          )}
          <Input
            size="large"
            placeholder="Phone Number"
            value={formik.values.phoneNumber}
            onChangeText={formik.handleChange("phoneNumber")}
            onBlur={formik.handleBlur("phoneNumber")}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <Text status="danger">{formik.errors.phoneNumber}</Text>
          )}
          <Input
            size="large"
            placeholder="Email"
            value={formik.values.email}
            onChangeText={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <Text status="danger">{formik.errors.email}</Text>
          )}
          <PasswordInput
            value={formik.values.password}
            onChangeText={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <Text status="danger">{formik.errors.password}</Text>
          )}
        </Layout>
      </Layout>
      <Layout
        style={{
          margin: 24,
          alignItems: "center",
        }}
      >
        <PrimaryButton fullWidth={true} disabled={!formik.isValid}>
          <ButtonText>Let's Go!</ButtonText>
        </PrimaryButton>
      </Layout>
    </Layout>
  );
};

export default SignUpLayout;
