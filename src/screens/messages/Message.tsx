import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MessageNavProp } from "./MessageParamList";

interface MessageProps extends MessageNavProp<"Message"> {}

export const Message: React.FC<MessageProps> = ({ navigation }) => {
  return (
    <View>
      <Text>This is a message!</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
