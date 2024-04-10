import LogInPage from "./Pages/Auth/log-in";
import LandingPage from "./Pages/LandingPage/landing-page";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpPage from "./Pages/Auth/sign-up";
import  Tabs from "./Pages/LandingPage/tab_bar"
import React from "react";

export default function Initial() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="LogIn" component={LogInPage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="DashBoard" component={Tabs} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}
