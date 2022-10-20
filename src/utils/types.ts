//app-types

import { NavigatorScreenParams } from "@react-navigation/native";
import { SvgProps } from "react-native-svg";

export interface BottomTabProps extends SvgProps {
  focused: string;
}

export type RootStackParamsList = {
  "shop screens": undefined;
  "cart screen": undefined;
  "search result"?: { query: string };
};

export type BottomTabsParamList = {
  home: undefined;
  categories: undefined;
  feed: undefined;
  account: undefined;
  help: undefined;
};
