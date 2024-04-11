
import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; // Import FontAwesome5 icons

const AddNav = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Food Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#FAAE2B" }]}
        onPress={() => navigation.navigate("Free-Food")}
      >
        <FontAwesome5 name="utensils" size={24} color="black" />
        <Text style={styles.buttonText}>Food</Text>
      </TouchableOpacity>
      
      {/* Non-Food Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#748c94" }]}
        onPress={() => navigation.navigate("Free Non-Food")}
      >
        <FontAwesome5 name="box" size={24} color="black" />
        <Text style={styles.buttonText}>Non Food</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});

export default AddNav;
