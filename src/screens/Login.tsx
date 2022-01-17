import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AuthNavProps } from "../structure/AuthParamList";
import { AuthContext } from "../structure/AuthProvider";

interface LoginProps extends AuthNavProps<"Login"> {}

export const Login: React.FC<LoginProps> = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>This is a login screen</Text>
      <Button
        title="Log In"
        onPress={() => {
          login();
        }}
      />

      <Button
        title="Sign Up"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
