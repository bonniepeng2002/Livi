import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TabHeader } from "../../components/TabHeader";

interface ProfileProps {}

export const Profile: React.FC<ProfileProps> = ({}) => {
  return (
    <View>
      <TabHeader />
      <Text>Profile</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
