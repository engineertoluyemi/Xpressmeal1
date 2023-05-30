import { StyleSheet, Text, View } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import React, { useState } from "react";
import {
  Route1,
  Route2,
  Route3,
  Route4,
  Route5,
  Route6,
  Route7,
  Route8,
} from "./MenuTabs";
import { SCREEN_WIDTH, colors, fonts } from "../global/styles";

import { restaurantsData, menu } from "../global/Data";
import { Icon } from "@rneui/base";
import { Modal } from "react-native";

const initialLayout = SCREEN_WIDTH;
const MenuProductScreen = ({ navigation, route }) => {
  const [routes] = useState(menu);

  const [index, setIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: colors.white }}
      tabStyle={styles.tabStyle}
      scrollEnabled={true}
      style={styles.tab}
      labelStyle={styles.tabLabel}
      contentContainerStyle={styles.tabContainer}
    />
  );

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 1:
        return <Route1 name={navigation} />;

      case 2:
        return <Route2 name={navigation} />;
      case 3:
        return <Route3 name={navigation} />;
      case 4:
        return <Route4 name={navigation} />;
      case 5:
        return <Route5 name={navigation} />;
      case 6:
        return <Route6 name={navigation} />;
      case 7:
        return <Route7 name={navigation} />;
      case 8:
        return <Route8 name={navigation} />;

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Modal>
        <View style={styles.view1}>
          <Icon
            name="arrow-left"
            type="material-community"
            color={colors.white}
            size={25}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.text1}>Menu List</Text>
        </View>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
          tabBarPosition="top"
        />
      </Modal>
    </View>
  );
};

export default MenuProductScreen;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  container: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
  },
  view1: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.primary,
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 25,
  },
  text1: {
    fontWeight: "bold",
    marginLeft: 40,
    color: colors.white,
    fontSize: 18,
  },
  view2: {
    marginTop: 5,
    paddingBottom: 20,
  },
  tab: {
    paddingTop: 0,
    backgroundColor: colors.primary,
    justifyContent: "space-between",
    // alignItems: "center",
  },
  tabContainer: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  tabLabel: {
    fontWeight: "bold",
    color: colors.white,
  },
  tabStyle: {
    width: SCREEN_WIDTH / 4,
    maxHeight: 45,
  },
  scene2: {
    backgroundColor: "#673ab7",
  },
});
