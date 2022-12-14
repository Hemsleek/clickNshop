import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Platform, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNav from "./components/organisms/BottomTabs";
import styled, { css } from "styled-components/native";
import { CContainer } from "./theme/style.component";
import Cart from "./screens/Cart";
import { RootStackParamsList } from "./utils/types";
import SearchResult from "./screens/SearchResult";

const Container = styled(CContainer)`
  flex-grow: 1;
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;

const Stack = createStackNavigator<RootStackParamsList>();

const AppNavigations = () => {
  const { Navigator, Screen } = Stack;
  return (
    <Container>
      <SafeAreaView style={{ flexGrow: 1 }} edges={["top", "left", "right"]}>
        <Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="shop screens"
        >
          <Screen name="shop screens" component={BottomNav} />
          <Screen name="cart screen" component={Cart} />
          <Screen name="search result" component={SearchResult} />
        </Navigator>
      </SafeAreaView>
    </Container>
  );
};

export default AppNavigations;
