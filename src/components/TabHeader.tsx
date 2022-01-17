import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { colors } from "../../assets/colors";

interface TabHeaderProps {
  navigate: (x: string) => void;
}

export const TabHeader: React.FC<TabHeaderProps> = ({ navigate }) => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.name}</Text>
      {route.name === "Home" && (
        <TouchableWithoutFeedback onPress={() => navigate("Profile")}>
          <Image
            source={require("../../assets/favicon.png")}
            width={5}
            height={5}
          />
        </TouchableWithoutFeedback>
      )}
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
