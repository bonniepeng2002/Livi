import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface MessagesProps {}

export const Messages: React.FC<MessagesProps> = ({}) => {
  return (
    <View>
      <Text>Messages</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
