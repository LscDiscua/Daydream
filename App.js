import React from 'react';

import * as SplashScreen from "expo-splash-screen";
import useDatabase from "./src/hooks/useDatabase";
import { UsersContextProvier } from "./src/context/UsersContext";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import DaydreamHome from "./src/screens/DaydreamHome";
import DaydreamLogin from "./src/screens/DaydreamLogin";
import DaydreamSignIn from "./src/screens/DaydreamSignIn";
import DaydreamInfoPersonal from "./src/screens/DaydreamInfoPersonal";
import DaydreamAvatarsProfile from "./src/screens/DaydreamAvatarsProfile";
import DaydreamControlUser from "./src/screens/DaydreamControlUser";

import { Dimensions } from 'react-native';



const { width, height } = Dimensions.get("window");

const Stack = createStackNavigator();

export default function App() {

  SplashScreen.preventAutoHideAsync();

  const isLoadingComplete = useDatabase();

  if (isLoadingComplete) SplashScreen.hideAsync();
  
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
          <Stack.Screen name = "ControlUser" component = {DaydreamControlUser} options = {{ title: ""}}/>

        </Stack.Navigator>
      </NavigationContainer>
  );
}

