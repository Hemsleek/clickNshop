import React from "react";

//icons
import HomeIcon from "./icons/HomeIcon";
import CategoriesIcon from "./icons/CategoriesIcon";
import FeedIcon from "./icons/FeedIcon";
import AccountIcon from "./icons/AccountIcon";
import HelpIcon from "./icons/HelpIcon";
import { useTheme } from "styled-components";

interface IRoute {
  route: any;
  focused: boolean;
}

const RenderIcon = ({ route: { key }, focused }: IRoute) => {
  const { primaryColor } = useTheme();

  let result = <HomeIcon focused={focused ? primaryColor : ""} />;

  switch (key) {
    case "home":
      break;
    case "categories":
      result = <CategoriesIcon focused={focused ? primaryColor : ""} />;
      break;
    case "feed":
      result = <FeedIcon focused={focused ? primaryColor : ""} />;
      break;
    case "account":
      result = <AccountIcon focused={focused ? primaryColor : ""} />;
      break;
    case "help":
      result = <HelpIcon focused={focused ? primaryColor : ""} />;
      break;
    default:
      break;
  }
  return result;
};

export default RenderIcon;
