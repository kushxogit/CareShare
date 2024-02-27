import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Initial from "./src/Frontend/index";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Initial />
    </ApplicationProvider>
  );
}
