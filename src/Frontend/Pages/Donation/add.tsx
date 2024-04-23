import React from "react";
import { TouchableOpacity, View, Text, Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const buttonSize = width * 0.8;

const Add = ({}) => {
  const navigation = useNavigation<NavigationType>();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        paddingHorizontal: 20,
      }}
    >
      <TouchableOpacity
        style={{
          width: buttonSize,
          height: buttonSize,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: "#FAAE2B",
        }}
        onPress={() => navigation.navigate("Request")}
      >
        <FontAwesome5 name="utensils" size={24} color="black" />
        <Text
          style={{
            marginLeft: 10,
            fontSize: 18,
            fontWeight: "bold",
            color: "black",
          }}
        >
          Food
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: buttonSize,
          height: buttonSize,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: "#748c94",
        }}
        onPress={() => navigation.navigate("Request")}
      >
        <FontAwesome5 name="box" size={24} color="black" />
        <Text
          style={{
            marginLeft: 10,
            fontSize: 18,
            fontWeight: "bold",
            color: "black",
          }}
        >
          Non Food
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Add;
