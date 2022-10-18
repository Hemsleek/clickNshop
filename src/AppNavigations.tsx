import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import BottomNav from "./components/organisms/BottomTabs";

const Stack = createStackNavigator();
const AppNavigations = () => {
  const { Navigator, Screen } = Stack;
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="shop screens" component={BottomNav} />
    </Navigator>
  );
};

export default AppNavigations;
