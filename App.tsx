import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Initial from "./src/Frontend/index";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import React from "react";
import Toast from "react-native-toast-message";
import { AuthProvider } from "src/Frontend/Contexts/authContext";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <AuthProvider>
        <Initial />
        <Toast />
      </AuthProvider>
    </ApplicationProvider>
  );
}
