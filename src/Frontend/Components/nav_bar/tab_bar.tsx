import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { AntDesign, Ionicons, FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CustomNavBar = () => {
  const navigation = useNavigation<NavigationType>();

  return (
    <Layout
      style={{
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        backgroundColor: "#f0f0f0",
        height: 70,
        justifyContent: "space-around",
        alignItems: "center",
        ...styles.shadow,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Feed")}
        style={styles.navButton}
      >
        <FontAwesome6 name="list-ol" size={24} color="#748c94" />
        <Text style={styles.navButtonText}>Feed</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Add")}
        style={{ ...styles.navButton, ...styles.addButton }}
      >
        <AntDesign name="pluscircle" size={44} color="#FAAE2B" />
        <AntDesign
          name="plus"
          size={24}
          color="white"
          style={styles.addIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity
        // onPress={() => navigation.navigate("Profile")}
        style={styles.navButton}
      >
        <Ionicons name="person-circle-outline" size={24} color="#748c94" />
        <Text style={styles.navButtonText}>Profile</Text>
      </TouchableOpacity>
    </Layout>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  navButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  addButton: {
    top: -30,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#FAAE2B",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addIcon: {
    position: "absolute",
  },
  navButtonText: {
    color: "#748c94",
    fontSize: 12,
  },
});

export default CustomNavBar;
