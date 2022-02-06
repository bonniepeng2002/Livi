import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../assets/colors";

interface ButtonProps {
  type: "main" | "secondary";
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  type,
  title,
  onPress,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={type === "main" ? styles.containerMain : styles.containerSecondary}
      onPress={() => {
        !disabled ? onPress() : null;
      }}
    >
      <Text style={type === "main" ? styles.titleMain : styles.titleSecondary}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  containerMain: {
    borderRadius: 10,
    borderWidth: 3,
    borderColor: colors.teal,
    backgroundColor: colors.teal,
    paddingHorizontal: 30,
    paddingVertical: 7,
  },
  containerSecondary: {
    borderRadius: 10,
    borderWidth: 3,
    borderColor: colors.teal,
    backgroundColor: colors.teal + "20",
    paddingHorizontal: 30,
    paddingVertical: 7,
  },
  titleMain: {
    color: "white",
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: 20,
  },
  titleSecondary: {
    color: colors.teal,
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: 20,
  },
});
