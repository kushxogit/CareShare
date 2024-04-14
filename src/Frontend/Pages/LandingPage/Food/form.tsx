
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, Alert } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import * as ImagePicker from 'react-native-image-picker'; // Import ImagePicker
import PrimaryButton from "src/Frontend/Components/Buttons/button.component";
import ButtonText from "src/Frontend/Components/Buttons/button-text.component";

const FormComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [region, setRegion] = useState(null); 
  // Function to handle image upload

  // Function to handle form submission
  const handleSubmit = () => {
    if (!title || !description || !preferredTime||street||city||zipcode) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    // Handle form submission logic here
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Preferred Time:', preferredTime);
    console.log('Street:', street);
    console.log('City:', city);
    console.log('Zipcode:', zipcode);
    // Reset form fields
    setTitle("");
    setDescription("");
    setPreferredTime("");
    setStreet("");
    setCity("");
    setZipcode("");
    // Show success message
    Alert.alert('Success', 'Form submitted successfully!');
  };
  const handlePreferredTimeChange = (text) => {
    // Validate the input
    const numericInput = parseInt(text);
    if (!isNaN(numericInput) && numericInput >= 0 && numericInput <= 9) {
      // Update preferred time state
      setPreferredTime(text);
    }
  };
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>


      {/* Form Section */}
      <View style={{ marginBottom: 20, backgroundColor: "#FFFFF9", width: "100%", top: 0 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Title</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 10, marginBottom: 10 }}
          placeholder="Title"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Description</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 10, marginBottom: 10 }}
          placeholder="Description"
          multiline
          numberOfLines={4}
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Preffered Time</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 10 }}
          placeholder="Preferred Time"
          value={preferredTime}
          onChangeText={handlePreferredTimeChange}
        />
         <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Location</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: "gray", borderRadius: 5, padding: 10, marginBottom: 10 }}
          placeholder="Street"
          value={street}
          onChangeText={(text) => setStreet(text)}
        />
        <TextInput
          style={{ borderWidth: 1, borderColor: "gray", borderRadius: 5, padding: 10, marginBottom: 10 }}
          placeholder="City"
          value={city}
          onChangeText={(text) => setCity(text)}
        />
        <TextInput
          style={{ borderWidth: 1, borderColor: "gray", borderRadius: 5, padding: 10 }}
          placeholder="Zipcode"
          value={zipcode}
          onChangeText={(text) => setZipcode(text)}
        />
      </View>
        
      

      {/* Submit Button */}
      <PrimaryButton
        fullWidth={true}
      // onPress={() => formik.handleSubmit()}
      // disabled={formik.isSubmitting || !formik.isValid}
      >
        <ButtonText>Let's Donate</ButtonText>
      </PrimaryButton>
    </ScrollView>
  );
};

export default FormComponent;
// import React, { useState, useEffect } from "react";
// import { View, Text, TextInput, ScrollView, Alert } from "react-native";
// import PrimaryButton from "src/Frontend/Components/Buttons/button.component";
// import ButtonText from "src/Frontend/Components/Buttons/button-text.component";

// const FormComponent = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [preferredTime, setPreferredTime] = useState("");
//   const [street, setStreet] = useState("");
//   const [city, setCity] = useState("");
//   const [zipcode, setZipcode] = useState("");
//   const [region, setRegion] = useState(null); // State to hold the map region

//   // Function to handle form submission
//   const handleSubmit = () => {
//     if (!title || !description || !preferredTime || !street || !city || !zipcode) {
//       Alert.alert('Error', 'Please fill in all fields.');
//       return;
//     }

//     // Fetch latitude and longitude coordinates based on the entered address
//     const { latitude, longitude } = fetchCoordinates(street, city, zipcode);
//     // Calculate region based on the actual latitude and longitude
//     const calculatedRegion = calculateRegion(latitude, longitude);
//     setRegion(calculatedRegion);

//     // Reset form fields
//     setTitle("");
//     setDescription("");
//     setPreferredTime("");
//     setStreet("");
//     setCity("");
//     setZipcode("");

//     // Show success message
//     Alert.alert('Success', 'Form submitted successfully!');
//   };

//   // Function to calculate the map region based on latitude and longitude
//   const calculateRegion = (latitude, longitude) => {
//     // Logic to calculate the map region based on latitude and longitude
//     // Replace with actual implementation
//     return {
//       latitude,
//       longitude,
//       latitudeDelta: 0.0922,
//       longitudeDelta: 0.0421,
//     };
//   };

//   // Effect to update region when location fields change
//   useEffect(() => {
//     if (street && city && zipcode) {
//       // Calculate region based on entered location
//       const calculatedRegion = calculateRegion(latitude, longitude);
//       setRegion(calculatedRegion);
//     }
//   }, [street, city, zipcode]);

//   // Function to fetch coordinates based on address
//   const fetchCoordinates = async (street, city, zipcode) => {
//     const address = `${street}, ${city}, ${zipcode}`;
//     const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
//     const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
  
//     try {
//       const response = await fetch(apiUrl);
//       const data = await response.json();
  
//       if (data.results && data.results.length > 0) {
//         const { lat, lng } = data.results[0].geometry.location;
//         return { latitude: lat, longitude: lng };
//       } else {
//         throw new Error('No results found');
//       }
//     } catch (error) {
//       console.error('Error fetching coordinates:', error.message);
//       // Handle errors here, such as displaying an error message to the user
//       return null;
//     }
//   };
  

//   return (
//     <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
//       {/* Form Section */}
//       <View style={{ marginBottom: 20, backgroundColor: "#FFFFF9", width: "100%", top: 0 }}>
//         <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Title</Text>
//         <TextInput
//           style={{ borderWidth: 1, borderColor: "gray", borderRadius: 5, padding: 10, marginBottom: 10 }}
//           placeholder="Title"
//           value={title}
//           onChangeText={(text) => setTitle(text)}
//         />
//         <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Description</Text>
//         <TextInput
//           style={{ borderWidth: 1, borderColor: "gray", borderRadius: 5, padding: 10, marginBottom: 10 }}
//           placeholder="Description"
//           multiline
//           numberOfLines={4}
//           value={description}
//           onChangeText={(text) => setDescription(text)}
//         />
//         <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Preferred Time</Text>
//         <TextInput
//           style={{ borderWidth: 1, borderColor: "gray", borderRadius: 5, padding: 10, marginBottom: 10 }}
//           placeholder="Preferred Time"
//           value={preferredTime}
//           onChangeText={(text) => setPreferredTime(text)}
//         />
//         <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Location</Text>
//         <TextInput
//           style={{ borderWidth: 1, borderColor: "gray", borderRadius: 5, padding: 10, marginBottom: 10 }}
//           placeholder="Street"
//           value={street}
//           onChangeText={(text) => setStreet(text)}
//         />
//         <TextInput
//           style={{ borderWidth: 1, borderColor: "gray", borderRadius: 5, padding: 10, marginBottom: 10 }}
//           placeholder="City"
//           value={city}
//           onChangeText={(text) => setCity(text)}
//         />
//         <TextInput
//           style={{ borderWidth: 1, borderColor: "gray", borderRadius: 5, padding: 10 }}
//           placeholder="Zipcode"
//           value={zipcode}
//           onChangeText={(text) => setZipcode(text)}
//         />
//       </View>

//       {/* Submit Button */}
//       <PrimaryButton fullWidth={true} onPress={handleSubmit}>
//         <ButtonText>Let's Donate</ButtonText>
//       </PrimaryButton>
//     </ScrollView>
//   );
// };

// export default FormComponent;
