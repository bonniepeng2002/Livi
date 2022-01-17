import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HomeNavProp } from "../home/HomeParamList";

interface ListingDetailsProps extends HomeNavProp<"Listing"> {}

export const ListingDetails: React.FC<ListingDetailsProps> = ({
  navigation,
}) => {
  return <Text>These are the listing details</Text>;
};
const styles = StyleSheet.create({
  container: {},
});
