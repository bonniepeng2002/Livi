import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ListingDetails } from "../listing/ListingDetails";
import { Feed } from "./Feed";
import { HomeParamList } from "./HomeParamList";
import { TabHeader } from "../../components/TabHeader";

interface HomeStackProps {}

const Stack = createStackNavigator<HomeParamList>();

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ navigation }) => (
          <TabHeader navigate={navigation.navigate} />
        ),
      }}
    >
      <Stack.Screen
        options={{ headerTitle: "Hi, " }}
        name="Feed"
        component={Feed}
      />
      <Stack.Screen
        name="ListingDetails"
        component={ListingDetails}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};
