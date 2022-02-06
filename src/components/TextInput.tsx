import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface TextInputProps {
  title: string;
}

export const TextInput: React.FC<TextInputProps> = ({ title }) => {
  return (
    <View>
      <TextInput title={title} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
