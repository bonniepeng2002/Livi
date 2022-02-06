import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Button } from "../../components/Button";
import { ListingCard } from "../../components/ListingCard";
import { HomeNavProp } from "./HomeParamList";

interface FeedProps extends HomeNavProp<"Feed"> {}

export const Feed: React.FC<FeedProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is the home</Text>

      <Button title="Hello" onPress={() => {}} />
      <Text></Text>
      <Button title="button" onPress={() => {}} type="secondary" />
      <TextInput title="hello" />
      <View>
        <FlatList
          contentContainerStyle={styles.list}
          data={[
            "Hello",
            "Goodbye",
            "Lol",
          ]}
          keyExtractor={(string) => string}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <ListingCard navigation={navigation} />
            </View>
          )}
        />
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
  listItem: {
    marginBottom: 8,
  },
});
