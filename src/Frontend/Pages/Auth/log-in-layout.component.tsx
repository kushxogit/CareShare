import { Input, Layout, Text } from "@ui-kitten/components";
import TopYellowContainer from "./logo-top-yellow-container";
import PasswordInput from "src/Frontend/Components/Input-Field/password-input.component";
import PrimaryButton from "src/Frontend/Components/Buttons/button.component";
import ButtonText from "src/Frontend/Components/Buttons/button-text.component";
import { useFormik } from "formik";
import * as Yup from "yup";
import constant from "src/Frontend/Constants/validation";
import React from "react";
import AuthService from "src/Frontend/Services/auth.service";
import {
  showToastError,
  showToastSuccess,
} from "src/Frontend/Components/toast";
import { useNavigation } from "@react-navigation/native";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email(constant.INVALID_EMAIL)
    .required(constant.CANNOT_BE_EMPTY),
  password: Yup.string().required(constant.CANNOT_BE_EMPTY),
});

const LogInLayout: React.FC = () => {
  const navigation = useNavigation<NavigationType>();
  const authServiceInstance = new AuthService();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values, { setSubmitting }) => {
      authServiceInstance
        .login(values.email, values.password)
        .then((response) => {
          showToastSuccess(response.data.message);
          navigation.navigate("DashBoard");
        })
        .catch((response) => {
          showToastError(response.error.message);
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <Layout style={{ flex: 1, width: "100%", height: "100%" }}>
      <TopYellowContainer />
      <Layout style={{ flex: 1, margin: 24, gap: 48 }}>
        <Text category="h1">Log In</Text>
        <Layout style={{ display: "flex", alignItems: "center", gap: 24 }}>
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
            formikProps={formik}
            onBlur={formik.handleBlur("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <Text status="danger">{formik.errors.password}</Text>
          )}
          <PrimaryButton
            fullWidth={true}
            onPress={() => formik.handleSubmit()}
            disabled={formik.isSubmitting || !formik.isValid}
          >
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
