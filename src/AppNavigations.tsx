import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./screens/Home";

const Stack = createStackNavigator();
const AppNavigations = () => {
  const { Navigator, Screen } = Stack;
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default AppNavigations;
