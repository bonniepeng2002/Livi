import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../../assets/colors";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeParamList } from "../screens/home/HomeParamList";

interface ListingCardProps {
  navigation: StackNavigationProp<HomeParamList, "Feed">;
  edit?: boolean;
}

export const ListingCard: React.FC<ListingCardProps> = ({
  navigation,
  edit,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("ListingDetails", { title: "sub" })}
    >
      <Image
        source={require("../../assets/placeholder.svg")}
        width={70}
        height={70}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>XX Rooms / XX Baths</Text>
        <Text style={styles.desc}>Address</Text>
        <Text style={styles.desc}>Availability</Text>
        <Text style={styles.price}>$XX / Month</Text>
      </View>
      {edit && <FontAwesomeIcon icon={faPencilAlt} style={styles.edit} />}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: 325,
    borderRadius: 7,
    borderColor: colors.darkGrey,
    borderWidth: 1,
    padding: 15,
    backgroundColor: "white",
  },
  textContainer: {},
  image: {
    marginRight: 15,
    backgroundColor: "black",
  },
  title: {
    fontWeight: "800",
    marginBottom: 5,
  },
  desc: {},
  price: {
    fontWeight: "600",
    marginTop: 5,
  },
  edit: {
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 16,
    color: colors.teal,
  },
});
