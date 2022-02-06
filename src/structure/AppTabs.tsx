import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppParamList } from "./AppParamList";
import { AddListing } from "../screens/listing/AddListing";
import { Home } from "../screens/home/Home";
import { Messages } from "../screens/messages/Messages";
import { Profile } from "../screens/tabs/Profile";
import { Settings } from "../screens/tabs/Settings";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../assets/colors";

interface AppTabsProps {}
type IconName =
  | "home-sharp"
  | "home-outline"
  | "person"
  | "person-outline"
  | "add"
  | "chatbubble-sharp"
  | "chatbubble-outline"
  | "settings"
  | "settings-outline";

const Tabs = createBottomTabNavigator<AppParamList>();

const getIconName = (name: string, focused: boolean) => {
  switch (name) {
    case "Home": {
      return focused ? "home-sharp" : "home-outline";
    }
    case "Profile": {
      return focused ? "person" : "person-outline";
    }
    case "Add a Listing": {
      return "add";
    }
    case "Messages": {
      return focused ? "chatbubble-sharp" : "chatbubble-outline";
    }
    case "Settings": {
      return focused ? "settings" : "settings-outline";
    }
    default: {
      return focused ? "home-sharp" : "home-outline";
    }
  }
};

export const AppTabs: React.FC<AppTabsProps> = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          const iconName: IconName = getIconName(route.name, focused);
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.teal,
        tabBarInactiveTintColor: colors.grey,
        header: () => null,
      })}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Profile" component={Profile} />
      <Tabs.Screen name="Add a Listing" component={AddListing} />
      <Tabs.Screen name="Messages" component={Messages} />
      <Tabs.Screen name="Settings" component={Settings} />
    </Tabs.Navigator>
  );
};
