import { Input, Layout, Text, Button } from "@ui-kitten/components";
import TopYellowContainer from "./logo-top-yellow-container";
import PasswordInput from "src/Frontend/Components/Input-Field/password-input.component";
import PrimaryButton from "src/Frontend/Components/Buttons/button.component";
import ButtonText from "src/Frontend/Components/Buttons/button-text.component";
import { useFormik } from "formik";
import * as Yup from "yup";
import constant from "src/Frontend/Constants/validation";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import AuthService from "src/Frontend/Services/auth.service";
import {
  showToastError,
  showToastSuccess,
} from "src/Frontend/Components/toast";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required(constant.CANNOT_BE_EMPTY),
  phoneNumber: Yup.number().required(constant.CANNOT_BE_EMPTY),
  email: Yup.string()
    .email(constant.INVALID_EMAIL)
    .required(constant.CANNOT_BE_EMPTY),
  password: Yup.string().min(8, constant.INVALID_PASSWORD),
});

const SignUpLayout: React.FC = () => {
  const navigation = useNavigation();
  const authServiceInstance = new AuthService();

  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      email: "",
      password: "",
    },
    onSubmit: () => null,
    validationSchema: SignupSchema,
  });

  const handleFormSubmit = (values, setSubmitting) => {
    authServiceInstance
      .signup(values.name, values.phoneNumber, values.email, values.password)
      .then((response) => {
        showToastSuccess(response.data.message);
      })
      .catch((response) => {
        showToastError(response.error.message);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

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
            autoCapitalize="none"
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
        </Layout>
      </Layout>
      <Layout
        style={{
          margin: 24,
          alignItems: "center",
        }}
      >
        <PrimaryButton
          fullWidth={true}
          onPress={() => {
            if (formik.isValid) {
              handleFormSubmit(formik.values, formik.setSubmitting);
              navigation.navigate("DashBoard");
            } else {
              formik.submitForm();
            }
           
          }}
        >
          <ButtonText>Let's Go!</ButtonText>
        </PrimaryButton>
      </Layout>
    </Layout>
  );
};

export default SignUpLayout;
