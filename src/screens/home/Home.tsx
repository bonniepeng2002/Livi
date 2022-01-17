import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { HomeStack } from "./HomeStack";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return <HomeStack />;
};
const styles = StyleSheet.create({
  container: {},
});
