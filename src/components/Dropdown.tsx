import React, { Dispatch, SetStateAction } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../assets/colors";
import DropDownPicker from "react-native-custom-dropdown";

interface Item {
  label: string;
  value: string;
}

interface DropdownProps {
  label: string;
  items: Item[];
  setItem: Dispatch<SetStateAction<Item>>;
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  items,
  setItem,
}) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <DropDownPicker
        items={items}
        defaultValue={items[0].value}
        containerStyle={{ height: 40 }}
        style={styles.dropdown}
        itemStyle={{
          justifyContent: "flex-start",
        }}
        dropDownStyle={styles.dropdownStyle}
        onChangeItem={(item) => setItem(item)}
        activeLabelStyle={styles.selectedLabel}
      />
    </>
  );
};
const styles = StyleSheet.create({
  container: {},
  label: { marginBottom: 5 },
  dropdown: {
    backgroundColor: "white",
    borderColor: colors.darkGrey,
    borderRadius: 7,
  },
  dropdownStyle: {
    backgroundColor: "white",
    borderColor: colors.darkGrey,
  },
  selectedLabel: {
    color: colors.teal,
    fontWeight: "bold",
  },
});
