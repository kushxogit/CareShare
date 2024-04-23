import React from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PrimaryButton from 'src/Frontend/Components/Buttons/button.component';
import ButtonText from 'src/Frontend/Components/Buttons/button-text.component';
import CustomTextInput from 'src/Frontend/Components/CustomTextInput'; // Assuming you have a custom TextInput component

// Validation Schema
const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  preferredTime: Yup.string().required('Preferred time is required'),
  street: Yup.string().required('Street is required'),
  city: Yup.string().required('City is required'),
  zipcode: Yup.string().required('Zipcode is required'),
});

const FormComponent = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      preferredTime: '',
      street: '',
      city: '',
      zipcode: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);
      // Reset form fields
      formik.resetForm();
      // Show success message
      Alert.alert('Success', 'Form submitted successfully!');
    },
  });

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <View style={{ marginBottom: 20, backgroundColor: "#FFFFF9", width: "100%", top: 0 }}>
        <CustomTextInput
          label="Title"
          value={formik.values.title}
          onChangeText={formik.handleChange('title')}
          onBlur={formik.handleBlur('title')}
          errorMessage={formik.touched.title && formik.errors.title}
        />
        <CustomTextInput
          label="Description"
          value={formik.values.description}
          onChangeText={formik.handleChange('description')}
          onBlur={formik.handleBlur('description')}
          errorMessage={formik.touched.description && formik.errors.description}
          multiline
          numberOfLines={4}
        />
        <CustomTextInput
          label="Preferred Time"
          value={formik.values.preferredTime}
          onChangeText={formik.handleChange('preferredTime')}
          onBlur={formik.handleBlur('preferredTime')}
          errorMessage={formik.touched.preferredTime && formik.errors.preferredTime}
        />
        <CustomTextInput
          label="Street"
          value={formik.values.street}
          onChangeText={formik.handleChange('street')}
          onBlur={formik.handleBlur('street')}
          errorMessage={formik.touched.street && formik.errors.street}
        />
        <CustomTextInput
          label="City"
          value={formik.values.city}
          onChangeText={formik.handleChange('city')}
          onBlur={formik.handleBlur('city')}
          errorMessage={formik.touched.city && formik.errors.city}
        />
        <CustomTextInput
          label="Zipcode"
          value={formik.values.zipcode}
          onChangeText={formik.handleChange('zipcode')}
          onBlur={formik.handleBlur('zipcode')}
          errorMessage={formik.touched.zipcode && formik.errors.zipcode}
        />
      </View>

      <PrimaryButton fullWidth={true} onPress={formik.handleSubmit} disabled={!formik.isValid || formik.isSubmitting}>
        <ButtonText>Let's Donate</ButtonText>
      </PrimaryButton>
    </ScrollView>
  );
};

export default FormComponent;