import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, Alert } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import * as ImagePicker from 'react-native-image-picker';

const ImagePart = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  // Function to handle image upload
  const handleUpload = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        Alert.alert('Error', 'An error occurred while selecting image. Please try again.');
      } else {
        const source = { uri: response.uri };
        setSelectedImages([...selectedImages, source]);
      }
    });
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Image Picker Section */}
      <TouchableOpacity onPress={handleUpload} style={styles.imagePicker}>
        <FontAwesome5 name="camera" size={24} color="black" />
        <Text style={{ marginLeft: 10 }}>Add Image</Text>
      </TouchableOpacity>

      {/* Selected Images Flatlist */}
      <FlatList
        data={selectedImages}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={item} style={styles.selectedImage} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    left:20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 100, // Adjust the height as needed
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'gray',
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  selectedImage: {
    width: 100,
    height: 100,
    marginHorizontal: 5,
    borderRadius: 5,
  },
});

export default ImagePart;
