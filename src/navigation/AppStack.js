import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClientTabs from "./ClientTabs";
import MainMenuScreen from "../screens/MainMenuScreen";
import RestaurantsMapScreen from "../screens/RestaurantsMapScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  //   const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="ClientTabs"
        component={ClientTabs}
        screenOptions={{
          headerShown: false,
          animation: "fade_from_bottom",
        }}
      />
      {/* <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}
      <Stack.Screen
        name="MainMenuScreen"
        component={MainMenuScreen}
        screenOptions={{
          headerShown: false,
          animation: "fade_from_bottom",
        }}
      />
      <Stack.Screen
        name="RestaurantsMapScreen"
        component={RestaurantsMapScreen}
        screenOptions={{
          headerShown: false,
          animation: "fade_from_bottom",
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
