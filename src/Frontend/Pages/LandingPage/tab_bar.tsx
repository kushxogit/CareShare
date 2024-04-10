// // import * as React from 'react';
// // import { Text, View } from 'react-native';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import Profile from '../LandingPage/profile';
// // import Add from '../LandingPage/add';
// // import Setting from '../LandingPage/setting';
// // import Message from '../LandingPage/message';
// // import Feed from '../LandingPage/feed';
// // const tab=createBottomTabNavigation();
// // const tabs=()=>{
// //     <tab.Navigation>
// //         <tab.Screen name="Feed" component={Feed}/>
// //         <tab.Screen name="Feed" component={Feed}/>
// //         <tab.Screen name="Feed" component={Feed}/>
// //         <tab.Screen name="Feed" component={Feed}/>
// //         <tab.Screen name="Feed" component={Feed}/>
// //     </tab.Navigation>
// // }
// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Profile from '../LandingPage/profile';
// import Add from '../LandingPage/add';
// import Setting from '../LandingPage/setting';
// import Message from '../LandingPage/message';
// import Feed from '../LandingPage/feed';

// const Tab = createBottomTabNavigator();

// const Tabs = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Feed" component={Feed}/>
//         <Tab.Screen name="Profile" component={Profile}/>
//         <Tab.Screen name="Add" component={Add}/>
//         <Tab.Screen name="Message" component={Message}/>
//         <Tab.Screen name="Setting" component={Setting}/>
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default Tabs;
import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { useNavigation } from "@react-navigation/native";
import Profile from '../LandingPage/profile';
import Add from '../LandingPage/add';
import Setting from '../LandingPage/setting';
import Message from '../LandingPage/message';
import Feed from '../LandingPage/feed';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed}/>
        <Tab.Screen name="Profile" component={Profile}/>
        <Tab.Screen name="Add" component={Add}/>
        <Tab.Screen name="Message" component={Message}/>
        <Tab.Screen name="Setting" component={Setting}/>
      </Tab.Navigator>
    
  );
}

export default Tabs;
