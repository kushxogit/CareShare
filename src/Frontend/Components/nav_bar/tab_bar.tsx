
// import { AntDesign } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Layout, Text } from "@ui-kitten/components";
// import AddNav from 'src/Frontend/Pages/LandingPage/add';
// import { StyleSheet, Image, View } from "react-native";
// import MessageNav from 'src/Frontend/Pages/LandingPage/message';
// import FeedNav from 'src/Frontend/Pages/LandingPage/feed';
// import ProfileNav from 'src/Frontend/Pages/LandingPage/profile';
// import SettingNav from 'src/Frontend/Pages/LandingPage/setting';
// import { Feather } from '@expo/vector-icons';
// import { FontAwesome6 } from '@expo/vector-icons';

// const Tab = createBottomTabNavigator();

// const Tabs = () => {
//   return (
//     <>
//       <Layout
      
//         style={{
          
//           position: "absolute",
//           width:350,
//           height: 500,
//           left: 20,
//           right: 20,
//           bottom:0,
//           elevation:0,
//           backgroundColor: "#FAAE2B",
//           borderRadius: 1000000000000000,
//           ...styles.shadow,
//         }}
//       >
//         <Tab.Navigator
//           tabBarOptions={{
//             showLabel: false,
//             style: {

//              height:500,
//             },
//           }}
//         >
//            <Tab.Screen name="Feed" component={FeedNav}    options={{
//               tabBarIcon: ({ focused }) => (
//                 <View style={{alignItems:'center',justifyContent:'center',top:10}}>
//                   <FontAwesome6 name="list-ol" size={34} color="black" resizeMode="contain"
//                     style={{
//                       width: 25,
//                       height: 50,
//                       tintColor: focused ? "#e32f45" : "#748c94",
//                     }}/>
                  
//                   <Text style={{ color: focused ? "#e32f45" : "#748c94",fontSize:12 }}>
//                     Feed
//                   </Text>
//                 </View>
//               ),
//             }}
//           />
//            <Tab.Screen name="Message" component={MessageNav}    options={{
//               tabBarIcon: ({ focused }) => (
//                 <View style={{alignItems:'center',justifyContent:'center',top:10}}>
//                 <AntDesign name="message1" size={24} color="black"  resizeMode="contain"
//                     style={{
//                       width: 25,
//                       height: 25,
//                       tintColor: focused ? "#e32f45" : "#748c94",
//                     }}/>
                  
//                   <Text style={{ color: focused ? "#e32f45" : "#748c94",fontSize:12 }}>
//                 Message
//                   </Text>
//                 </View>
//               ),
//             }}
//           />
//           <Tab.Screen
//             name="Add"
//             component={AddNav}
//             options={{
//               tabBarIcon: ({ focused }) => (
//                 <View style={{alignItems:'center',justifyContent:'center',top:10}}>
//                  <AntDesign name="pluscircle" size={24} color="#FAAE2B"   resizeMode="contain"
//                     style={{
//                       width: 25,
//                       height: 25,
//                       tintColor: focused ? "#e32f45" : "#748c94",
//                     }}/>
                  
//                   <Text style={{ color: focused ? "#e32f45" : "#748c94" ,fontSize:12}}>
//                     Add
//                   </Text>
//                 </View>
//               ),
//             }}
//           />
         
         
//           <Tab.Screen name="Profile" component={ProfileNav}    options={{
//               tabBarIcon: ({ focused }) => (
//                 <View style={{alignItems:'center',justifyContent:'center',top:10}}>
//                   <Ionicons name="person-circle-outline" size={24} color="black"  resizeMode="contain"
//                     style={{
//                       width: 25,
//                       height: 25,
//                       tintColor: focused ? "#e32f45" : "#748c94",
//                     }}/>
                  
//                   <Text style={{ color: focused ? "#e32f45" : "#748c94" ,fontSize:12}}>
//                     Profile
//                   </Text>
//                 </View>
//               ),
//             }}
//           />
//           <Tab.Screen name="Setting" component={SettingNav}    options={{
//               tabBarIcon: ({ focused }) => (
//                 <View style={{alignItems:'center',justifyContent:'center',top:10}}>
//                   <Feather name="settings" size={24} color="black"  resizeMode="contain"
//                     style={{
//                       width: 25,
//                       height: 25,
//                       tintColor: focused ? "#e32f45" : "#748c94",
//                     }}/>
                  
//                   <Text style={{ color: focused ? "#e32f45" : "#748c94",fontSize:12 }}>
//                 Setting
//                   </Text>
//                 </View>
//               ),
//             }}
//           />
//         </Tab.Navigator>
//       </Layout>
//     </>
//   );
// };
// const styles = StyleSheet.create({
//   shadow: {
//     shadowColor: "#7F5DF0",
//     shadowOffset: {
//       width: 0,
//       height: 100,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.5,
//     elevation: 5,
//     // backgroundColor:'#FAAE2B',
//   },
// });
// export default Tabs;
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Layout, Text } from "@ui-kitten/components";
import AddNav from 'src/Frontend/Pages/LandingPage/add';
import { StyleSheet, Image, View ,TouchableOpacity} from "react-native";
import MessageNav from 'src/Frontend/Pages/LandingPage/message';
import FeedNav from 'src/Frontend/Pages/LandingPage/feed';
import ProfileNav from 'src/Frontend/Pages/LandingPage/profile';
import SettingNav from 'src/Frontend/Pages/LandingPage/setting';
import { Feather } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: "center",
        ...styles.shadow,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: "#FAAE2B",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

const Tabs = () => {
  return (
    <Layout
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        backgroundColor: "#fffffff",
        height: 805, // Adjust the height as needed
        ...styles.shadow,
      }}
    >
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            backgroundColor: "transparent", // Set tab bar background to transparent
          },
        }}
      >
        <Tab.Screen
          name="Feed"
          component={FeedNav}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                <FontAwesome6 name="list-ol" size={24} color="black" resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#e32f45" : "#748c94",
                  }}/>
                <Text style={{ color: focused ? "#e32f45" : "#748c94",fontSize:12 }}>
                  Feed
                </Text>
              </View>
            ),
          }}
        />
      
        <Tab.Screen
          name="Message"
          component={MessageNav}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                <AntDesign name="message1" size={24} color="black"  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#e32f45" : "#748c94",
                  }}/>
                <Text style={{ color: focused ? "#e32f45" : "#748c94",fontSize:12 }}>
                  Message
                </Text>
              </View>
            ),
          }}
        />
          <Tab.Screen
          name="Add"
          component={AddNav}
          options={{
            tabBarIcon:({focused})=>(
<AntDesign name="pluscircle" size={44} color="black" />
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileNav}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                <Ionicons name="person-circle-outline" size={24} color="black"  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#e32f45" : "#748c94",
                  }}/>
                <Text style={{ color: focused ? "#e32f45" : "#748c94" ,fontSize:12}}>
                  Profile
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingNav}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                <Feather name="settings" size={24} color="black"  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#e32f45" : "#748c94",
                  }}/>
                <Text style={{ color: focused ? "#e32f45" : "#748c94",fontSize:12 }}>
                  Setting
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
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
});

export default Tabs;
