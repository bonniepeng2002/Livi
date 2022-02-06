import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ListingCard } from "../../components/ListingCard";
import { HomeNavProp } from "./HomeParamList";

interface FeedProps extends HomeNavProp<"Feed"> {}

export const Feed: React.FC<FeedProps> = ({ navigation }) => {
  const [text, settext] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text>This is the home</Text>
        <Button title="Hello" onPress={() => {}} />
        <Text></Text>
        <Button title="button" onPress={() => {}} type="secondary" />
        <Input onChangeText={settext} placeholder="hello" />
        {/* <Dropdown
          label="hello"
          data={[
            { label: "hello", value: "hello" },
            { label: "hello2", value: "hello2" },
            { label: "hello3", value: "hello3" },
          ]}
          onSelect={() => {}}
        /> */}
        <View>
          <FlatList
            contentContainerStyle={styles.list}
            data={["Hello", "Goodbye", "Lol"]}
            keyExtractor={(string) => string}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <ListingCard navigation={navigation} />
              </View>
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  list: {
    width: "100%",
  },
  listItem: {
    marginBottom: 8,
  },
});
