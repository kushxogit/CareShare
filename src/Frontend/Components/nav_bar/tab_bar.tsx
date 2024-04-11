
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Layout, Text } from "@ui-kitten/components";
import AddNav from 'src/Frontend/Pages/LandingPage/add';
import { StyleSheet, Image, View } from "react-native";
import MessageNav from 'src/Frontend/Pages/LandingPage/message';
import FeedNav from 'src/Frontend/Pages/LandingPage/feed';
import ProfileNav from 'src/Frontend/Pages/LandingPage/profile';
import SettingNav from 'src/Frontend/Pages/LandingPage/setting';
import { Feather } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <>
      <Layout
      
        style={{
          
          position: "absolute",
          width:350,
          height: 500,
          left: 20,
          right: 20,
          bottom:0,
          elevation:0,
          backgroundColor: "#FAAE2B",
          borderRadius: 1000000000000000,
          ...styles.shadow,
        }}
      >
        <Tab.Navigator
          tabBarOptions={{
            showLabel: false,
            style: {

             height:500,
            },
          }}
        >
           <Tab.Screen name="Feed" component={FeedNav}    options={{
              tabBarIcon: ({ focused }) => (
                <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                  <FontAwesome6 name="list-ol" size={34} color="black" resizeMode="contain"
                    style={{
                      width: 25,
                      height: 50,
                      tintColor: focused ? "#e32f45" : "#748c94",
                    }}/>
                  
                  <Text style={{ color: focused ? "#e32f45" : "#748c94",fontSize:12 }}>
                    Add
                  </Text>
                </View>
              ),
            }}
          />
           <Tab.Screen name="Message" component={MessageNav}    options={{
              tabBarIcon: ({ focused }) => (
                <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                <AntDesign name="message1" size={24} color="black"  resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? "#e32f45" : "#748c94",
                    }}/>
                  
                  <Text style={{ color: focused ? "#e32f45" : "#748c94",fontSize:12 }}>
                    Add
                  </Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Add"
            component={AddNav}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                 <AntDesign name="pluscircle" size={24} color="#FAAE2B"   resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? "#e32f45" : "#748c94",
                    }}/>
                  
                  <Text style={{ color: focused ? "#e32f45" : "#748c94" ,fontSize:12}}>
                    Add
                  </Text>
                </View>
              ),
            }}
          />
         
         
          <Tab.Screen name="Profile" component={ProfileNav}    options={{
              tabBarIcon: ({ focused }) => (
                <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                  <Ionicons name="person-circle-outline" size={24} color="black"  resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? "#e32f45" : "#748c94",
                    }}/>
                  
                  <Text style={{ color: focused ? "#e32f45" : "#748c94" ,fontSize:12}}>
                    Add
                  </Text>
                </View>
              ),
            }}
          />
          <Tab.Screen name="Setting" component={SettingNav}    options={{
              tabBarIcon: ({ focused }) => (
                <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                  <Feather name="settings" size={24} color="black"  resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? "#e32f45" : "#748c94",
                    }}/>
                  
                  <Text style={{ color: focused ? "#e32f45" : "#748c94",fontSize:12 }}>
                    Add
                  </Text>
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      </Layout>
    </>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    // backgroundColor:'#FAAE2B',
  },
});
export default Tabs;
