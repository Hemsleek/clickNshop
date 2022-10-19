import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Platform, SafeAreaView, StatusBar } from "react-native";
import BottomNav from "./components/organisms/BottomTabs";
import styled, { css } from "styled-components/native";
import { CContainer } from "./theme/style.component";

const Container = styled(CContainer)`
  flex-grow: 1;
  padding: ${Platform.OS === "android" ? StatusBar.currentHeight : 0};
`;

const Stack = createStackNavigator();

const AppNavigations = () => {
  const { Navigator, Screen } = Stack;
  return (
    <Container>
      <SafeAreaView style={{ flexGrow: 1 }}>
        <Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Screen name="shop screens" component={BottomNav} />
        </Navigator>
      </SafeAreaView>
    </Container>
  );
};

export default AppNavigations;
