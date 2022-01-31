import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Button } from "../../components/Button";
import { ListingCard } from "../../components/ListingCard";
import { HomeNavProp } from "./HomeParamList";

interface FeedProps extends HomeNavProp<"Feed"> {}

export const Feed: React.FC<FeedProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="button" onPress={() => {}} type="main" />
      <Text></Text>
      <Button title="button" onPress={() => {}} type="secondary" />
      <View>
        <FlatList
          contentContainerStyle={styles.list}
          data={[
            "Hello",
            "Goodbye",
            "Lol",
            "Hello",
            "Goodbye",
            "Lol",
            "Hello",
            "Goodbye",
            "Lol",
            "Hello",
          ]}
          keyExtractor={(string) => string}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <ListingCard navigation={navigation} />
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  list: {
    width: "100%",
    paddingTop: 8,
  },
  listItem: {
    marginBottom: 8,
  },
});
