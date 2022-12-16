// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, TabBarIOSItem, Text, View } from 'react-native';
import Ionic from "react-native-vector-icons/Ionicons";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import ReactDOM from 'react-dom';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Search from "./components/screens/Search";
import Home from "./components/screens/Home";
import Reels from "./components/screens/Reels";
import Activity from "./components/screens/Activity";
import Profile from "./components/screens/Profile";
import Status from "./components/screenComponents/Status";
import FriendProfile from "./components/screenComponents/FriendProfile";
import EditProfile from "./components/screenComponents/EditProfile";
import CreatePost from "./components/screens/CreatePost";

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            backgroundColor:"#999999",
            height: 50,
            // marginBottom:10,
            // zIndex:10,
          },

          tabBarIcon: ({ focused, size, colour }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home-sharp" : "home-outline";
              size = focused ? size + 8 : size + 2;
            } else if (route.name === "Search") {
              iconName = focused ? "clipboard-outline" : "clipboard-outline";
            } 
             else if (route.name === "Activity") {
              iconName = focused ? "attach-outline" : "attach-outline";
            } else if (route.name === "profile") {
              iconName = focused ? "ios-person-circle" : "ios-person-outline";
            }
            else if (route.name === "CreatePost") {
              iconName = focused ? "book-outline" : "book-outline";
            }
            return <Ionic name={iconName} size={size} color={colour} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="search" component={Search} />
        {/* <Tab.Screen name="Reels" component={Reels} /> */}
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="CreatePost" component={CreatePost} />

      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer >
      <Stack.Navigator
      screenOptions={{headerShow:false}}
      
      >
        <Stack.Screen name="Studygram" component={BottomTabScreen}  />
        <Stack.Screen name="Status" component={Status}  />
        <Stack.Screen name="FriendProfile" component={FriendProfile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
// ReactDOM.render(<App/>, querySelector("#root"));
