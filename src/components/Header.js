import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
import { colors, parameters } from "../global/styles";

const Header = ({ title, type, navigation }) => {
  return (
    <View style={styles.header}>
      <View style={styles.roundIcon}>
        <Icon
          type="material-community"
          name={type}
          color={colors.primary}
          size={28}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: colors.primary,
    height: parameters.headerHeight,
    alignItems: "center",
    justifyContent: "space-between",
  },
  roundIcon: {
    backgroundColor: colors.white,
    borderRadius: 30,
    margin: 10,
  },
  titleContainer: {
    flex: 1,
    marginLeft: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.white,
  },
});
