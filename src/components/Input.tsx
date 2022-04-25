import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { colors } from "../../assets/colors";

interface InputProps {
  label: string;
  placeholder?: string;
  onChangeText: (string: string) => void;
  defaultValue?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder = "",
  onChangeText,
  defaultValue,
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        multiline={true}
        placeholder={placeholder}
        onChangeText={(newText) => onChangeText(newText)}
        defaultValue={defaultValue}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    borderColor: colors.darkGrey,
    borderWidth: 1,
    borderRadius: 7,
    paddingVertical: 5,
    paddingHorizontal: 8,
    fontSize: 18,
    backgroundColor: "white",
  },
  label: { fontSize: 13, marginBottom: 6 },
});
