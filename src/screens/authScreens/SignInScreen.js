import React, { useState, useRef, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  LogBox,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { colors, parameters, title } from "../../global/styles";
import { Button, Icon, SocialIcon } from "@rneui/base";
import { Formik } from "formik";
import Spinner from "react-native-loading-spinner-overlay";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../firebaseConfig";
import Header from "../../components/Header";
import { SignInContext } from "../../contexts/authContext";

LogBox.ignoreLogs(["Setting a timer"]);

const SignInScreen = ({ navigation }) => {
  const { dispatchSignedIn } = useContext(SignInContext);

  const [textInput2focussed, setTextInput2Focussed] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [spinner, setSpinner] = useState(false);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignIn = async (data) => {
    try {
      setSpinner(true);
      const { password, email } = data;
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      if (user) {
        dispatchSignedIn({
          type: "UPDATE_SIGN_IN",
          payload: { userToken: "signed-in" },
        });
        setSpinner(false);
      }
    } catch (e) {
      console.log(e);
      Alert.alert(e.message);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation} />

      <ScrollView>
        <View style={{ margin: 20, marginTop: 10 }}>
          <Text style={title}>Sign-In</Text>
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
        <View style={{ alignItems: "center" }}>
          <Text style={styles.text1}>
            Please enter the email and password to continue
          </Text>
        </View>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => handleSignIn(values)}
        >
          {(props) => (
            <View>
              <View style={{ marginTop: 20 }}>
                <View>
                  <TextInput
                    style={styles.textInput1}
                    placeholder="Email"
                    ref={textInput1}
                    // keyboardType="email-address"
                    inputMode="email"
                    onChangeText={props.handleChange("email")}
                    value={props.values.email}
                  />
                </View>
                <View style={styles.textInput2}>
                  <Animatable.View
                    animation={textInput2focussed ? "" : "fadeInLeft"}
                    duration={400}
                  >
                    <Icon
                      name="lock"
                      iconStyle={{ color: colors.gray3 }}
                      type="material"
                    />
                  </Animatable.View>

                  <TextInput
                    style={{ width: "80%" }}
                    placeholder="Password"
                    ref={textInput2}
                    secureTextEntry={true}
                    onFocus={() => {
                      setTextInput2Focussed(false);
                    }}
                    onBlur={() => {
                      setTextInput2Focussed(true);
                    }}
                    onChangeText={props.handleChange("password")}
                    value={props.values.password}
                  />

                  <Animatable.View
                    animation={textInput2focussed ? "" : "fadeInLeft"}
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
              </View>

              <View style={{ marginHorizontal: 20, marginTop: 15 }}>
                <Button
                  title="SIGN IN"
                  buttonStyle={parameters.primaryButton}
                  titleStyle={parameters.buttonTitle}
                  // onPress={handleSignIn}
                  onPress={props.handleSubmit}
                />
              </View>

              <View
                style={{
                  alignItems: "center",
                  marginTop: 10,
                  marginBottom: 20,
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>OR</Text>
              </View>

              <View
                style={{
                  marginHorizontal: 10,
                  marginTop: 10,
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <SocialIcon
                  title="Sign In With Facebook"
                  button
                  type="facebook"
                  style={styles.socialIcon}
                  onPress={() => {}}
                />
              </View>

              <View
                style={{
                  marginHorizontal: 10,
                  marginTop: 10,
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <SocialIcon
                  title="Sign In With Google"
                  button
                  type="google"
                  style={styles.socialIcon}
                  onPress={() => {}}
                />
              </View>

              <View style={{ padding: 20 }}>
                <Text style={styles.text1}>New on FoodMall?</Text>
              </View>

              <View style={{ alignItems: "flex-end", marginHorizontal: 20 }}>
                <Button
                  title="Create an account"
                  buttonStyle={styles.createButton}
                  titleStyle={styles.createButtonTitle}
                  onPress={() => navigation.navigate("SignUpScreen")}
                />
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: colors.gray3,
    fontSize: 16,
  },
  textInput1: {
    borderWidth: 1,
    borderColor: colors.gray3,
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    padding: 5,
  },
  textInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: colors.gray3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    marginBottom: 20,
    padding: 5,
  },
  socialIcon: {
    borderRadius: 12,
    height: 50,
    marginRight: 20,
    width: "90%",
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
});
