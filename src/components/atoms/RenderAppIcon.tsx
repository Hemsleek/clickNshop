import React from "react";

//icons
import HomeIcon from "./icons/HomeIcon";
import CategoriesIcon from "./icons/CategoriesIcon";
import FeedIcon from "./icons/FeedIcon";
import AccountIcon from "./icons/AccountIcon";
import HelpIcon from "./icons/HelpIcon";
import { useTheme } from "styled-components";
import { View } from "react-native";
import ChristmasIcon from "./icons/ChristmasIcon";
import StoresIcon from "./icons/StoresIcon";
import HangoutIcon from "./icons/HangoutIcon";
import WoozeeExpressIcon from "./icons/WoozeeExpressIcon";
import WoozeeEventsIcon from "./icons/WoozeeEventsIcon";
import SocialIcon from "./icons/SocialIcon";
import WoozeeeUtilsIcon from "./icons/WoozeeUtilsIcon";
import CallToOrder from "./icons/CallToOrderIcon";

export type TAppIcon =
  | "christmas"
  | "stores"
  | "hangout"
  | "woozeeExpress"
  | "woozeeEvent"
  | "social"
  | "woozeeUtils"
  | "callToOrder";

const RenderAppIcon = ({ name }: { name: TAppIcon }) => {
  const { shopBlack } = useTheme();

  switch (name) {
    case "christmas":
      return <ChristmasIcon />;
    case "stores":
      return <StoresIcon />;
    case "hangout":
      return <HangoutIcon />;
    case "woozeeExpress":
      return <WoozeeExpressIcon />;
    case "woozeeEvent":
      return <WoozeeEventsIcon />;
    case "social":
      return <SocialIcon />;
    case "woozeeUtils":
      return <WoozeeeUtilsIcon />;
    case "callToOrder":
      return <CallToOrder />;
    default:
      return <View />;
  }
};

export default RenderAppIcon;
