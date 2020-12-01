import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import DaydreamHome from "./src/screens/DaydreamHome";
import DaydreamLogin from "./src/screens/DaydreamLogin";
import DaydreamSignIn from "./src/screens/DaydreamSignIn";
import DaydreamInfoPersonal from "./src/screens/DaydreamInfoPersonal";
import DaydreamAvatarsProfile from "./src/screens/DaydreamAvatarsProfile";

import { Dimensions } from 'react-native';



const { width, height } = Dimensions.get("window");

const Stack = createStackNavigator();

export default function App() {
  
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "Home" screenOptions={{
                headerShown: true,
                headerTransparent:true
            }}>
          <Stack.Screen name = "Home" component = {DaydreamHome} options = {{ title: ""}}/>
          <Stack.Screen name = "Login" component = {DaydreamLogin} options = {{ title: ""}}/>
          <Stack.Screen name = "SignIn" component = {DaydreamSignIn} options = {{ title: ""}}/>
          <Stack.Screen name = "InfoPersonal" component = {DaydreamInfoPersonal} options = {{ title: ""}}/>
          <Stack.Screen name = "AvartarsProfile" component = {DaydreamAvatarsProfile} options = {{ title: ""}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

