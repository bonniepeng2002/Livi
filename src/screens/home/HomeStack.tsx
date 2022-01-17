import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ListingDetails } from "../listing/ListingDetails";
import { Feed } from "./Feed";

interface HomeStackProps {}

const Stack = createStackNavigator();

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Listing" component={ListingDetails} />
    </Stack.Navigator>
  );
};
