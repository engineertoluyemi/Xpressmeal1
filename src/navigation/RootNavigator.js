import React, { useContext } from "react";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { SignInContext } from "../contexts/authContext";
import { NavigationContainer } from "@react-navigation/native";

const RootNavigator = () => {
  const { signedIn } = useContext(SignInContext);
  return (
    <NavigationContainer>
      {signedIn.userToken !== "signed-in" ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
};

export default RootNavigator;
