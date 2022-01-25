import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TabHeader } from "../../components/TabHeader";
import { AuthContext } from "../../structure/AuthProvider";

interface SettingsProps {}

export const Settings: React.FC<SettingsProps> = ({}) => {
  const { logout } = useContext(AuthContext);

  return (
    <View>
      <TabHeader />
      <Text>Settings</Text>
      <Button title="Log Out" onPress={() => logout()} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
