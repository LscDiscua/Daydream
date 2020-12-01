import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import DaydreamHome from "./src/screens/DaydreamHome";
import DaydreamLogin from "./src/screens/DaydreamLogin";
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
          <Stack.Screen name = "Login" component = {DaydreamLogin}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

