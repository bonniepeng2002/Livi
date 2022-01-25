import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Message } from "./Message";
import { AllMessages } from "./AllMessages";

interface MessageStackProps {}

const Stack = createStackNavigator();

export const MessageStack: React.FC<MessageStackProps> = ({}) => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="All Messages" component={AllMessages} />
      <Stack.Screen name="Message" component={Message} />
    </Stack.Navigator>
  );
};
