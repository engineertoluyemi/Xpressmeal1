import React, { useLayoutEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SearchScreen from "../screens/SearchScreen";
import SearchResultScreen from "../screens/SearchResultScreen";
import RestaurantHomeScreen from "../screens/RestaurantHomeScreen";
import MenuProductScreen from "../screens/MenuProductScreen";
import { colors } from "../global/styles";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const ClientSearch = createNativeStackNavigator();

const ClientStack = ({ navigation, route }) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "RestaurantHomeScreen" || "MenuProductScreen") {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, route]);

  return (
    <ClientSearch.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <ClientSearch.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={() => ({})}
        screenOptions={{
          headerShown: false,
          animation: "fade_from_bottom",
        }}
      />
      <ClientSearch.Screen
        name="SearchResultScreen"
        component={SearchResultScreen}
        options={() => ({})}
        screenOptions={{
          headerShown: false,
          animation: "fade_from_bottom",
        }}
      />
      <ClientSearch.Screen
        name="RestaurantHomeScreen"
        component={RestaurantHomeScreen}
        options={() => ({})}
        screenOptions={{
          headerShown: false,
          animation: "fade_from_bottom",
        }}
      />
      <ClientSearch.Screen
        name="MenuProductScreen"
        component={MenuProductScreen}
        options={() => ({})}
        screenOptions={{
          headerShown: false,
          animation: "fade_from_bottom",
        }}
      />
    </ClientSearch.Navigator>
  );
};

export default ClientStack;
