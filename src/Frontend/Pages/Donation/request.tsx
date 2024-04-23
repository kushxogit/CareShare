import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@ui-kitten/components";
import PrimaryButton from "src/Frontend/Components/Buttons/button.component";
import DonationService from "src/Frontend/Services/donation.service";
import {
  ICreateDonationData,
  IDonationData,
} from "src/Frontend/types/donation-types";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDonations } from "src/Frontend/Contexts/acceptedDonationContext";

const donationService = new DonationService();

const validationSchema = Yup.object().shape({
  pickUpTimes: Yup.string().required("Pick-up times are required"),
  postalCode: Yup.number()
    .typeError("Postal code must be a number")
    .required("Postal code is required"),
  state: Yup.string().required("State is required"),
});

const RequestForm = () => {
  const donationContext = useDonations();
  const navigation = useNavigation<NavigationType>();

  useEffect(() => {
  }, []);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      pickUpTimes: "",
      streetName: "",
      city: "",
      postalCode: "",
      state: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const donationData: ICreateDonationData = {
        title: values.title,
        description: values.description.trim(),
        pickupTimes: values.pickUpTimes,
        location: {
          street: values.streetName,
          city: values.city,
          state: values.state,
          zipCode: values.postalCode,
        },
        for: "Charity",
      };

      donationService
        .createDonation(donationData)
        .then(async () => {
          alert("Donation request submitted successfully!");
          formik.resetForm();

          const role = await AsyncStorage.getItem("role");
          if (role === "Donor") {
            donationContext.setDonations(donationData)
            navigation.navigate("Engagement");
          } else {
            navigation.navigate("Feed");
          }
        })
        .catch((error) => {
          alert("Failed to submit donation request.");
          console.error(error);
        });
    },
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <Input
          placeholder="Title"
          value={formik.values.title}
          onChangeText={formik.handleChange("title")}
          style={{ marginBottom: 10 }}
        />
        <Input
          placeholder="Description"
          multiline={true}
          value={formik.values.description}
          onChangeText={formik.handleChange("description")}
          style={{ marginBottom: 10 }}
        />
        <Input
          placeholder="Pick-up times"
          value={formik.values.pickUpTimes}
          onChangeText={(text) =>
            formik.setFieldValue("pickUpTimes", text.replace(/[^0-9]/g, ""))
          }
          style={{ marginBottom: 10 }}
        />
        <Input
          placeholder="Street Name"
          value={formik.values.streetName}
          onChangeText={formik.handleChange("streetName")}
          style={{ marginBottom: 10 }}
        />
        <Input
          placeholder="City"
          value={formik.values.city}
          onChangeText={formik.handleChange("city")}
          style={{ marginBottom: 10 }}
        />
        <Input
          placeholder="Postal Code"
          value={formik.values.postalCode}
          onChangeText={(text) =>
            formik.setFieldValue("postalCode", text.replace(/[^0-9]/g, ""))
          }
          keyboardType="numeric"
          style={{ marginBottom: 10 }}
        />
        <Input
          placeholder="State"
          value={formik.values.state}
          onChangeText={formik.handleChange("state")}
          style={{ marginBottom: 10 }}
        />
        <PrimaryButton onPress={() => formik.handleSubmit()}>
          Submit
        </PrimaryButton>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollView: {
    paddingHorizontal: 22,
  },
});

export default RequestForm;
