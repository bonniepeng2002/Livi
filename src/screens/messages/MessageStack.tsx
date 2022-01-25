import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Message } from "./Message";
import { AllMessages } from "./AllMessages";
import { MessageParamList } from "./MessageParamList";
import { TabHeader } from "../../components/TabHeader";

interface MessageStackProps {}

const Stack = createStackNavigator<MessageParamList>();

export const MessageStack: React.FC<MessageStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ navigation }) => (
          <TabHeader navigate={navigation.navigate} />
        ),
      }}
    >
      <Stack.Screen name="All Messages" component={AllMessages} />
      <Stack.Screen name="Message" component={Message} />
    </Stack.Navigator>
  );
};
