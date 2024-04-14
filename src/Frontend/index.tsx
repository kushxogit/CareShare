import LogInPage from "./Pages/Auth/log-in";
import LandingPage from "./Pages/LandingPage/landing-page";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpPage from "./Pages/Auth/sign-up";
import Tabs from "./Components/nav_bar/tab_bar";
import NonFood from "./Pages/LandingPage/nonFood";
import React from "react";
import FoodScreen from "./Pages/LandingPage/Food/food";

export default function Initial() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="LogIn" component={LogInPage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="DashBoard" component={Tabs} />
        <Stack.Screen name="Free-Food" component={FoodScreen} />
        <Stack.Screen name="Free Non-Food" component={NonFood} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
