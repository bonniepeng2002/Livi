import React, { ReactNode } from "react";
import { Text, StyleSheet, View } from "react-native";

interface TitleProps {
  children: ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  container: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginBottom: 15,
  },
});
