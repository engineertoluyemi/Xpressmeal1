import {
  StyleSheet,
  Text,
  View,
  Modal,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  Switch,
} from "react-native";
import React, { useState, useContext } from "react";
import { Button, Icon, withBadge } from "@rneui/base";
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  colors,
  parameters,
} from "../global/styles";
import { getAuth, initializeAuth, signOut } from "firebase/auth";
import { SignInContext } from "../contexts/authContext";

const HomeHeader = ({ navigation, type, title }) => {
  const [showModal, setShowModal] = useState(false);
  const BadgeIcon = withBadge(0)(Icon);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const auth = getAuth();

  const { dispatchSignedIn } = useContext(SignInContext);

  const handleSignOut = async () => {
    try {
      signOut(auth).then(
        dispatchSignedIn({
          // type: "UPDATE_SIGN_IN",
          // payload: { userToken: null },
        })
      );
    } catch (e) {
      Alert.alert(e.message);
      console.log(e.message);
    }
  };

  return (
    <View style={styles.header}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 15,
        }}
      >
        <Icon
          type="material-community"
          name="menu"
          color={colors.white}
          size={32}
          onPress={() => {
            setShowModal(!showModal);
          }}
        />
      </View>
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text style={{ color: colors.white, fontWeight: "bold", fontSize: 25 }}>
          XpressMeal
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginRight: 15,
        }}
      >
        <BadgeIcon
          type="material-community"
          name="cart"
          size={35}
          color={colors.white}
        />
      </View>

      <Modal
        animationType={"slideInUp"}
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(!showModal);
        }}
        style={styles.modalContainer}
      >
        <View style={styles.modalContainer}>
          {/* Menu Buttons */}
          <ScrollView>
            <View
              style={{
                backgroundColor: colors.primary,
                height: 100,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity>
                <Image
                  source={require("../assets/6.png")}
                  style={{
                    height: 80,
                    aspectRatio: 1,
                    borderRadius: 40,
                    resizeMode: "stretch",
                    paddingTop: 5,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  paddingLeft: 10,
                }}
              >
                <Text
                  style={{
                    color: colors.white,
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  Charles User
                </Text>
                <Text style={{ color: colors.white }}>email@email.com</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: 10,
                  }}
                >
                  <View style={{ alignItems: "center" }}>
                    <Text style={styles.subText1}>1</Text>
                    <Text style={styles.subText2}>My Favourites</Text>
                  </View>

                  <View style={{ alignItems: "center" }}>
                    <Text style={styles.subText1}>0</Text>
                    <Text style={styles.subText2}>My Cart</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            {/* Header Section End */}

            <View
              style={{
                justifyContent: "space-between",
              }}
            >
              <View>
                <TouchableOpacity style={styles.menuContainer}>
                  <Icon
                    name="home-account"
                    type="material-community"
                    color={colors.gray3}
                    size={35}
                    style={{ paddingRight: 20 }}
                  />
                  <Text style={styles.menuText}>Client Stack</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.menuContainer}>
                <Icon
                  name="city"
                  type="material-community"
                  color={colors.gray3}
                  size={35}
                  style={{ paddingRight: 20 }}
                />
                <Text style={styles.menuText}>Business Console</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuContainer}>
                <Icon
                  name="credit-card-outline"
                  type="material-community"
                  color={colors.gray3}
                  size={35}
                  style={{ paddingRight: 20 }}
                />
                <Text style={styles.menuText}>Payment</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuContainer}>
                <Icon
                  name="tag-heart"
                  type="material-community"
                  color={colors.gray3}
                  size={35}
                  style={{ paddingRight: 20 }}
                />
                <Text style={styles.menuText}>Promotions</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuContainer}>
                <Icon
                  name="cog-outline"
                  type="material-community"
                  color={colors.gray3}
                  size={35}
                  style={{ paddingRight: 20 }}
                />
                <Text style={styles.menuText}>Settings</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuContainer}>
                <Icon
                  name="lifebuoy"
                  type="material-community"
                  color={colors.gray3}
                  size={35}
                  style={{ paddingRight: 20 }}
                />
                <Text style={styles.menuText}>Help</Text>
              </TouchableOpacity>
              <View style={styles.menuContainer}>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: colors.gray4,
                    }}
                  >
                    Preferences
                  </Text>
                  <View style={styles.menuContainer}>
                    <View
                      style={{
                        width: "100%",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingRight: 10,
                      }}
                    >
                      <Text style={styles.menuText}>Dark Theme</Text>
                      <Switch
                        trackColor={{
                          false: colors.gray4,
                          true: colors.tertiary,
                        }}
                        thumbColor={isEnabled ? colors.primary : "#f4f3f4"}
                        ios_backgroundColor={colors.gray4}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity
            style={styles.footerContainer}
            onPress={() => {
              handleSignOut();
            }}
          >
            <Icon
              name="logout"
              type="material"
              color={colors.gray3}
              size={35}
              style={{ paddingRight: 10 }}
            />
            <Text style={styles.menuText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: colors.white,
    height: SCREEN_HEIGHT * 0.97,
    width: SCREEN_WIDTH * 0.8,
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    marginVertical: 15,
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingVertical: 10,
  },
  menuText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.gray2,
  },
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
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.white,
  },
  titleContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  menuText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  subText1: {
    fontSize: 17,
    fontWeight: "bold",
    color: colors.white,
  },
  subText2: {
    fontSize: 17,
    color: colors.white,
  },
});
