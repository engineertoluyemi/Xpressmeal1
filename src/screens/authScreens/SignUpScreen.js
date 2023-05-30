import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Alert,
} from "react-native";
import React, { useRef, useState } from "react";
import * as Animatable from "react-native-animatable";
import Spinner from "react-native-loading-spinner-overlay";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../firebaseConfig";
import { colors, parameters, title } from "../../global/styles";
import Header from "../../components/Header";
import { Formik } from "formik";
import { Button, Icon } from "@rneui/base";

const initialValues = {
  phone_number: "",
  name: "",
  family_name: "",
  email: "",
  password: "",
  username: "",
};

const SignUpScreen = ({ navigation }) => {
  const [passwordFocussed, setPasswordFocussed] = useState(false);
  const [passwordBlurred, setPasswordBlurred] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);
  const [spinner, setSpinner] = useState(false);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignUp = async (data) => {
    try {
      setSpinner(true);
      const { password, email } = data;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      Alert.alert("User account registered successful!");
      navigation.navigate("LoginScreen");
    } catch (e) {
      Alert.alert(e.message);
      // if (e.code === "auth/email-already-in-use") {
      //   Alert.alert(
      //     "The email you're trying to register with has already been used by another user"
      //   );
      // }
      // if (e.code === "auth/invalid-email") {
      //   Alert.alert("The email you entered is Invalid");
      //   console.log(e);
      // } else {
      //   Alert.alert(e.code);
      // }
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Header title="SIGN UP" type="arrow-left" navigation={navigation} />
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.view1}>
          <Text style={styles.text1}>Sign-Up</Text>
        </View>
        <View style={{ alignItems: "center", paddingBottom: 30 }}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 100,
              aspectRatio: 1,
              borderRadius: 100,
              backgroundColor: colors.primary,
            }}
          >
            <Image
              source={require("../../assets/icon.png")}
              style={{
                height: 70,
                aspectRatio: 1,
                tintColor: colors.white,
                paddingBottom: 10,
              }}
            />
          </View>
          <Text style={title}>Xpress Meal</Text>
        </View>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            handleSignUp(values);
          }}
        >
          {(props) => (
            <View style={styles.view2}>
              <View style={styles.view3}>
                <Text style={styles.text2}>New on XpressMeal?</Text>
              </View>
              <View style={styles.view6}>
                <TextInput
                  placeholder="Mobile Number"
                  style={styles.input1}
                  keyboardType="number-pad"
                  autoFocus={true}
                  onChangeText={props.handleChange("phone_number")}
                  value={props.values.phone_number}
                />
              </View>
              <View style={styles.view6}>
                <TextInput
                  placeholder="Firstname"
                  style={styles.input1}
                  autoFocus={false}
                  onChangeText={props.handleChange("name")}
                  value={props.values.name}
                />
              </View>
              <View style={styles.view6}>
                <TextInput
                  placeholder="Lastname"
                  style={styles.input1}
                  autoFocus={false}
                  onChangeText={props.handleChange("family_name")}
                  value={props.values.family_name}
                />
              </View>
              <View style={styles.view10}>
                <View>
                  <Icon
                    type="material"
                    name="email"
                    style={styles.email}
                    color={colors.gray3}
                  />
                </View>
                <View style={styles.view11}>
                  <TextInput
                    placeholder="Email"
                    style={styles.input4}
                    keyboardType="email-address"
                    autoFocus={false}
                    onChangeText={props.handleChange("email")}
                    value={props.values.email}
                  />
                </View>
              </View>
              <View style={styles.view14}>
                <Animatable.View
                  animation={passwordFocussed ? "" : "fadeInLeft"}
                  duration={400}
                >
                  <Icon
                    name="lock"
                    type="material"
                    color={colors.gray3}
                    style={{ marginRight: 10 }}
                  />
                </Animatable.View>
                <TextInput
                  placeholder="Password"
                  style={{ flex: 1 }}
                  autoFocus={false}
                  onChangeText={props.handleChange("password")}
                  value={props.values.password}
                  onFocus={() => {
                    setPasswordFocussed(false);
                  }}
                  onBlur={() => {
                    setPasswordFocussed(true);
                  }}
                />
                <Animatable.View
                  animation={passwordFocussed ? "fadeInRight" : "fadeInLeft"}
                  duration={400}
                >
                  <Icon
                    name="visibility-off"
                    iconStyle={{ color: colors.gray3 }}
                    type="material"
                    style={{ marginRight: 10 }}
                  />
                </Animatable.View>
              </View>
              <View style={styles.view15}>
                <Text style={styles.text3}>
                  By creating or logging into an account you are
                </Text>
                <View style={styles.view16}>
                  <Text style={styles.text3}>agreeing with our </Text>
                  <Text style={styles.text4}> Terms & Conditions </Text>
                  <Text style={styles.text3}> and </Text>
                </View>
                <Text style={styles.text4}> Privacy Statement</Text>
              </View>
              <View style={styles.view17}>
                <Button
                  title="SIGN UP"
                  buttonStyle={parameters.primaryButton}
                  titleStyle={parameters.buttonTitle}
                  onPress={props.handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>
        <View style={styles.view18}>
          <Text style={styles.text5}>OR</Text>
        </View>
        <View style={styles.view19}>
          <View style={styles.view20}>
            <Text style={styles.text6}>
              Already have an account with XpressMeal ?
            </Text>
          </View>
          <View style={styles.view21}>
            <Button
              title="SIGN IN"
              buttonStyle={styles.createButton}
              titleStyle={styles.createButtonTitle}
              onPress={() => navigation.navigate("SignInScreen")}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  view1: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  text1: {
    fontSize: 22,
    color: colors.primary,
    fontWeight: "bold",
  },
  view2: {
    justifyContent: "flex-start",
    backgroundColor: colors.white,
    paddingHorizontal: 15,
  },
  view3: {
    marginTop: 5,
    marginBottom: 10,
  },
  text2: {
    fontSize: 15,
    color: colors.gray2,
  },
  view4: {
    flexDirection: "row",
    borderWidth: 1,
    backgroundColor: colors.gray4,
    borderRadius: 12,
    paddingLeft: 5,
  },
  view5: {
    marginLeft: 30,
    marginVertical: 10,
    // maxWidth: "65%",
  },
  input1: {
    fontSize: 16,
  },
  view6: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.gray4,
    borderRadius: 12,
    paddingLeft: 5,
    marginTop: 20,
    height: 48,
  },
  view7: {
    marginLeft: 0,
    maxWidth: "65%",
  },
  input2: {
    fontSize: 16,
    marginLeft: 0,
    marginBottom: 0,
  },
  view8: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.gray4,
    borderRadius: 12,
    paddingLeft: 5,
    marginTop: 20,
    height: 48,
  },
  view9: {
    marginLeft: 0,
    maxWidth: "65%",
  },
  input3: {
    fontSize: 16,
    marginLeft: 0,
    marginBottom: 0,
  },
  view10: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.gray4,
    borderRadius: 12,
    paddingLeft: 5,
    marginTop: 20,
    height: 48,
  },
  email: {
    fontSize: 24,
    padding: 0,
    marginBottom: 0,
    marginTop: 11,
    marginLeft: 2,
  },
  view11: {
    marginLeft: 30,
    justifyContent: "center",
    maxWidth: "65%",
  },
  input4: {
    fontSize: 16,
    marginLeft: -20,
  },
  view13: {
    flexDirection: "row",
    height: 40,
  },
  view14: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.gray4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
    paddingLeft: 5,
    paddingTop: 10,
    height: 48,
  },
  view15: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  text3: {
    fontSize: 13,
  },
  view16: {
    flexDirection: "row",
  },
  text4: {
    textDecorationLine: "underline",
    color: colors.lightGreen,
    fontSize: 13,
  },
  button1: {
    backgroundColor: colors.primary,
    alignContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.primary,
    height: 50,
    paddingHorizontal: 20,
    width: "100%",
  },
  title1: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3,
  },
  view17: {
    marginVertical: 10,
    marginTop: 30,
  },
  view18: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 15,
  },
  text5: {
    fontSize: 15,
    fontWeight: "bold",
  },
  view19: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
  },
  view20: {
    marginTop: 5,
  },
  view21: {
    marginTop: 5,
    alignItems: "flex-end",
    paddingBottom: 20,
  },
  button2: {
    backgroundColor: colors.primary,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.primary,
    height: 40,
    paddingHorizontal: 20,
  },
  title2: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3,
  },
  createButton: {
    backgroundColor: colors.white,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.primary,
    height: 40,
    paddingHorizontal: 20,
  },
  createButtonTitle: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3,
  },
  text6: {},
});
