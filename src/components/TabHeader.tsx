import React from "react";
import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../assets/colors";

interface TabHeaderProps {
  navigate?: (x: string) => void;
}

export const TabHeader: React.FC<TabHeaderProps> = ({
  navigate = () => {},
}) => {
  const route = useRoute();

  const HeaderBtn = (destination: string, pathToIcon: string = "") => {
    return (
      <TouchableOpacity onPress={() => navigate(destination)}>
        <Image
          source={require("../../assets/favicon.png")}
          width={5}
          height={5}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {route.name === "Feed" ? "Hi, " : route.name}
      </Text>

      {route.name === "Feed" && HeaderBtn("Profile")}
      {/* change the below to the other person's profile */}
      {route.name === "Message" && HeaderBtn("Profile")}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.teal,
    flexDirection: "row",
    height: 94,
    paddingHorizontal: 35,
    paddingVertical: 15,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  title: {
    color: "white",
    fontWeight: "800",
    fontSize: 24,
  },
});
