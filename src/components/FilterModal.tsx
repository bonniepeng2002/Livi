import React, { useState } from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import { Button } from "./Button";
import { Dropdown } from "./Dropdown";
import { Title } from "./Title";

interface FilterModalProps {
  visible: boolean;
}

export const FilterModal: React.FC<FilterModalProps> = ({ visible }) => {
  const fakeItems = [
    { label: "Test1", value: "Test1" },
    { label: "Test2", value: "Test2" },
    { label: "Test3", value: "Test3" },
  ];
  const [propertyType, setPropertyType] = useState({
    label: "init",
    value: "init",
  });
  return (
    <Modal visible={visible} animationType="slide">
      {/* onPress: just passing in a function reference */}
      <View style={styles.container}>
        <Title>All Filters</Title>
        <Dropdown
          label="Property Type:"
          items={fakeItems}
          setItem={setPropertyType}
        />
      </View>
    </Modal>
  );
};

// on modal close, save filters

const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
});
