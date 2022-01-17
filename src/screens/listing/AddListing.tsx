import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface AddListingProps {}

export const AddListing: React.FC<AddListingProps> = ({}) => {
  return (
    <View>
      <Text>Add a Listing</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
