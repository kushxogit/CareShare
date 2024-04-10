import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Layout, Text } from "@ui-kitten/components";
import AddNav from "./add";
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <>
      <Layout style={{ width: "100%", height: "100%" }}>
        <Tab.Navigator>
          <Tab.Screen name="Add" component={AddNav} />
        </Tab.Navigator>
      </Layout>
    </>
  );
};

export default Tabs;
