import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/authScreens/WelcomeScreen";
import SignInScreen from "../screens/authScreens/SignInScreen";
import SignUpScreen from "../screens/authScreens/SignUpScreen";
import ForgotPasswordScreen from "../screens/authScreens/ForgotPasswordScreen";

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        screenOptions={{
          headerShown: false,
          animation: "fade_from_bottom",
        }}
      />
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        screenOptions={{
          headerShown: false,
          animation: "fade_from_bottom",
        }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        screenOptions={{
          headerShown: false,
          animation: "fade_from_bottom",
        }}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        screenOptions={{
          headerShown: false,
          animation: "fade_from_bottom",
        }}
      />
      {/* <Stack.Screen
        name="ClientTabs"
        component={ClientTabs}
        screenOptions={{
          headerShown: false,
          animation: "fade_from_bottom",
        }}
      /> */}
      {/* <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}
      {/* <Stack.Screen
        name="MainMenuScreen"
        component={MainMenuScreen}
        screenOptions={{
          headerShown: false,
          animation: "fade_from_bottom",
        }}
      /> */}
      {/* <Stack.Screen
        name="RestaurantsMapScreen"
        component={RestaurantsMapScreen}
        screenOptions={{
          headerShown: false,
          animation: "fade_from_bottom",
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
