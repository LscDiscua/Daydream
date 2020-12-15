import React from 'react';




import * as SplashScreen from "expo-splash-screen";
import useDatabase from "./src/hooks/useDatabase";


// Contextos necesarios para que funcione la aplicacion

import { UsersContextProvier } from "./src/context/UsersContext";

import { FoodsContextProvider } from "./src/context/FoodsContext";

import { ExercisesContextProvider } from "./src/context/ExercisesContext";

import { CupsContextProvider } from "./src/context/CupsContext";

import { PlansContextProvider } from "./src/context/PlansContext";

//  Componentes para navegar entre pantallas

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import DaydreamHome from "./src/screens/DaydreamHome";
import DaydreamLogin from "./src/screens/DaydreamLogin";
import DaydreamSignIn from "./src/screens/DaydreamSignIn";
import DaydreamInfoPersonal from "./src/screens/DaydreamInfoPersonal";
import DaydreamAvatarsProfile from "./src/screens/DaydreamAvatarsProfile";
import DaydreamControlUser from "./src/screens/DaydreamControlUser";
import DaydreamOptionsHome from "./src/screens/DaydreamOptionsHome"; 
import DaydreamFoods from "./src/screens/DaydreamFoods";
import DaydreamExercises from "./src/screens/DaydreamExercises";
import DaydreamUserProfile from "./src/screens/DaydreamUserProfile";
import DaydreamHydration from "./src/screens/DaydreamHydration";
import DaydreamUsers from "./src/screens/DaydreamUsers";


import { Dimensions } from 'react-native';

// varibles para el estilo de la pantalla


const { width, height } = Dimensions.get("window");

const Stack = createStackNavigator();


// Funcion principal

export default function App() {

  SplashScreen.preventAutoHideAsync();

  const isLoadingComplete = useDatabase();

  if (isLoadingComplete) SplashScreen.hideAsync();
  
  return (
    <PlansContextProvider>
      <CupsContextProvider>
        <ExercisesContextProvider>
          <FoodsContextProvider>
              <UsersContextProvier>
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
                    <Stack.Screen name = "OptionsHome" component = {DaydreamOptionsHome} options = {{ title: ""}}/>
                    <Stack.Screen name = "Foods" component = {DaydreamFoods} options = {{ title: ""}}/>
                    <Stack.Screen name = "Exercises" component = {DaydreamExercises} options = {{ title: ""}}/>
                    <Stack.Screen name = "Profile" component = {DaydreamUserProfile} options = {{ title: ""}}/>
                    <Stack.Screen name = "Hydration" component = {DaydreamHydration} options = {{ title: ""}}/>
                    <Stack.Screen name = "Users" component = {DaydreamUsers} options = {{ title: ""}}/>
                  </Stack.Navigator>
                </NavigationContainer>
                </UsersContextProvier>
              </FoodsContextProvider>
            </ExercisesContextProvider>
        </CupsContextProvider>
    </PlansContextProvider>
  );
}

