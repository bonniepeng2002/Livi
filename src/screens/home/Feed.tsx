import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { HomeNavProp } from "./HomeParamList";

interface FeedProps extends HomeNavProp<"Feed"> {}

export const Feed: React.FC<FeedProps> = ({ navigation }) => {
  return (
    <View>
      <View>
        <Text>This is the home</Text>

        {/* temporary list to test */}
        <FlatList
          style={styles.list}
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
            "Goodbye",
            "Lol",
            "Hello",
            "Goodbye",
            "Lol",
            "Hello",
            "Goodbye",
            "Lol",
            "Hello",
            "Goodbye",
            "Lol",
          ]}
          keyExtractor={(string) => string}
          renderItem={({ item }) => (
            <Button
              title={item}
              onPress={() =>
                navigation.navigate("ListingDetails", { title: item })
              }
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    width: "100%",
  },
});
