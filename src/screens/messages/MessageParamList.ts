import { StackNavigationProp } from "@react-navigation/stack";

export type MessageParamList = {
  "All Messages": undefined;
  Message: undefined;
};

export type MessageNavProp<T extends keyof MessageParamList> = {
  navigation: StackNavigationProp<MessageParamList, T>;
};
