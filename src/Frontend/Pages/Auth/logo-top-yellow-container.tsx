import { Layout } from "@ui-kitten/components";
import "./.stylee.css";
import { StyleSheet } from "react-native";

const TopYellowContainer: React.FC = () => {
  return (
    <Layout
      style={{ width: "100%", height: "25%", backgroundColor: "#FAAE2B" }}
    ></Layout>
  );
};

const styles = StyleSheet.create({
  firstContainer: {},
  secondContainer: {},
});

export default TopYellowContainer;
