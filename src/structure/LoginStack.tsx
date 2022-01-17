import React from "react";
import { Login } from "../screens/auth/Login";
import { Register } from "../screens/auth/Register";
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
