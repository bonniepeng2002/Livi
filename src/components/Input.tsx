import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { colors } from "../../assets/colors";

interface InputProps {
  placeholder?: string;
  onChangeText: (string: string) => void;
  defaultValue?: string;
}

export const Input: React.FC<InputProps> = ({
  placeholder = "",
  onChangeText,
  defaultValue,
}) => {
  return (
    <TextInput
      style={styles.input}
      multiline={true}
      placeholder={placeholder}
      onChangeText={(newText) => onChangeText(newText)}
      defaultValue={defaultValue}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    borderColor: colors.darkGrey,
    borderWidth: 1,
    borderRadius: 7,
    width: 300,
    paddingVertical: 5,
    paddingHorizontal: 8,
    fontSize: 18,
  },
});
