import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Keyboard,
  Touchable,
  Modal,
} from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Button } from "../../components/Button";
import { Dropdown } from "../../components/Dropdown";
import { FilterModal } from "../../components/FilterModal";
import { Input } from "../../components/Input";
import { ListingCard } from "../../components/ListingCard";
import { Title } from "../../components/Title";
import { HomeNavProp } from "./HomeParamList";

interface FeedProps extends HomeNavProp<"Feed"> {}

export const Feed: React.FC<FeedProps> = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <FilterModal visible={modalVisible} />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Title>Find a Listing</Title>

        <View style={styles.input}>
          <Input
            label="Search by city:"
            onChangeText={setSearchText}
            placeholder="Search..."
          />
        </View>

        <View style={styles.button}>
          <Button
            title="All Filters"
            onPress={() => setModalVisible(true)}
            type="secondary"
          />
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.listings}>
        <FlatList
          data={["Hello", "Goodbye", "Lol", "Helilo", "Goiodbye", "Liol"]}
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
    marginTop: 30,
    marginHorizontal: 25,
    flex: 1,
  },
  listings: {
    marginTop: 20,
  },
  listItem: { marginBottom: 8 },
  title: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginBottom: 15,
  },
  input: { marginBottom: 15 },
  button: { alignSelf: "flex-start" },
});
