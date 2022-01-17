import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { AuthNavProps } from "../structure/AuthParamList";

interface RegisterProps extends AuthNavProps<"Register"> {}

export const Register: React.FC<RegisterProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>This is a register screen</Text>
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
