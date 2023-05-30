import React from "react";
import { Pressable, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ClientStack from "../navigation/ClientStack";
import { colors } from "../global/styles";
import { Icon } from "@rneui/base";

import MyOrdersScreen from "../screens/MyOrdersScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import SearchScreen from "../screens/SearchScreen";
import GaleryScreen from "../screens/RestaurantTabs/GaleryScreen";

const ClientTab = createBottomTabNavigator();

const CustomTab = ({ children, onPress }) => (
  <Pressable onPress={onPress}>
    <View
      style={{
        height: 70,
        width: 70,
        borderRadius: 40,
        backgroundColor: colors.lightBlue,
        top: -30,
        shadowRadius: 2,
      }}
    >
      {children}
    </View>
  </Pressable>
);

const ClientTabs = () => {
  return (
    <ClientTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <ClientTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" type="material" color={color} size={size} />
          ),
        }}
      />
      <ClientTab.Screen
        name="SearchScreen"
        component={ClientStack}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" type="material" color={color} size={size} />
          ),
        }}
      />

      <ClientTab.Screen
        name="GaleryScreen"
        component={GaleryScreen}
        options={{
          tabBarButton: (props) => <CustomTab {...props} />,
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <Icon
                  name="send"
                  type="material"
                  color={colors.primary}
                  size={30}
                />
              ) : (
                // <FontAwesome name="send" size={30} color={} />
                // <FontAwesome name="send-o" size={30} color={"white"} />

                <Icon
                  name="send"
                  type="material"
                  color={colors.primary}
                  size={30}
                />
              )}
            </View>
          ),
        }}
      />

      <ClientTab.Screen
        name="MyOrdersScreen"
        component={MyOrdersScreen}
        options={{
          tabBarLabel: "My Orders",
          tabBarIcon: ({ color, size }) => (
            <Icon name="view-list" type="material" color={color} size={size} />
          ),
        }}
      />
      <ClientTab.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={{
          tabBarLabel: "My Account",
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" type="material" color={color} size={size} />
          ),
        }}
      />
    </ClientTab.Navigator>
  );
};

export default ClientTabs;
