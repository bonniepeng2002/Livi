import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { HomeNavProp } from "./HomeParamList";

interface FeedProps extends HomeNavProp<"Feed"> {}

export const Feed: React.FC<FeedProps> = ({ navigation }) => {
  return (
    <View>
      <Text>This is the feed</Text>
      <Button
        title="Go to Listing"
        onPress={() => navigation.navigate("Listing")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
