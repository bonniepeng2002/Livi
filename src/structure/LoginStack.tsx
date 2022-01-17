import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { AuthParamList } from "./AuthParamList";
import { createStackNavigator } from "@react-navigation/stack";

interface LoginStackProps {}

const Stack = createStackNavigator<AuthParamList>();

export const LoginStack: React.FC<LoginStackProps> = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {},
});
