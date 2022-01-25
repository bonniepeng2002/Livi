import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MessageNavProp } from "./MessageParamList";

interface AllMessagesProps extends MessageNavProp<"All Messages"> {}

export const AllMessages: React.FC<AllMessagesProps> = ({ navigation }) => {
  return (
    <View>
      <Text>These are all your messages</Text>
      <Button
        title="Go to Message"
        onPress={() => navigation.navigate("Message")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
