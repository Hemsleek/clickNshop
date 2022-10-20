import React, { useState } from "react";

import { BottomNavigation } from "react-native-paper";

import { useTheme } from "styled-components";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import RenderIcon from "../atoms/RenderIcon";
import RenderLabel from "../atoms/RenderLabel";

//screens
import HomeScreen from "../../screens/Home";
import FeedScreen from "../../screens/Feed";
import CategoriesScreen from "../../screens/Categories";
import AccountScreen from "../../screens/Account";
import HelpScreen from "../../screens/Help";

const BottomNav = () => {
  const { primaryColor } = useTheme();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "home" },
    { key: "categories" },
    { key: "feed" },
    { key: "account" },
    { key: "help" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    categories: CategoriesScreen,
    feed: FeedScreen,
    account: AccountScreen,
    help: HelpScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting={false}
      barStyle={{
        backgroundColor: "white",
        // paddingTop: hp("1%"),
      }}
      activeColor={primaryColor}
      renderIcon={({ route, focused }) => (
        <RenderIcon route={route} focused={focused} />
      )}
      renderLabel={({ route, focused }) => (
        <RenderLabel route={route} focused={focused} />
      )}
    />
  );
};

export default BottomNav;
