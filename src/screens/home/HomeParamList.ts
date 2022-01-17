import { StackNavigationProp } from "@react-navigation/stack";

export type HomeParamList = {
  Feed: undefined;
  Listing: undefined;
};

export type HomeNavProp<T extends keyof HomeParamList> = {
  navigation: StackNavigationProp<HomeParamList, T>;
};
