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
  const { shopBlack } = useTheme();

  let result = <HomeIcon focused={focused ? shopBlack : ""} />;

  switch (key) {
    case "home":
      break;
    case "categories":
      result = <CategoriesIcon focused={focused ? shopBlack : ""} />;
      break;
    case "feed":
      result = <FeedIcon focused={focused ? shopBlack : ""} />;
      break;
    case "account":
      result = <AccountIcon focused={focused ? shopBlack : ""} />;
      break;
    case "help":
      result = <HelpIcon focused={focused ? shopBlack : ""} />;
      break;
    default:
      break;
  }
  return result;
};

export default RenderIcon;
