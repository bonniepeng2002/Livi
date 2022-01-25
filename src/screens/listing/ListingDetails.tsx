import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HomeNavProp } from "../home/HomeParamList";

interface ListingDetailsProps extends HomeNavProp<"ListingDetails"> {}

export const ListingDetails: React.FC<ListingDetailsProps> = ({ route }) => {
  return (
    <View>
      <Text>These are the item details for {route.params.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
