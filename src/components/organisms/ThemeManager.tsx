import React, { ReactElement } from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import styled, { ThemeProvider } from "styled-components/native";
import { Provider as PaperProvider } from "react-native-paper";
import { appThemes } from "../../theme/appTheme";

import { Provider } from "react-redux";
import store from "../../store";

const Wrapper = styled.KeyboardAvoidingView`
  flex-grow: 1;
`;

const ThemeManager = ({ children }: { children: ReactElement }) => {
  return (
    <ThemeProvider theme={appThemes}>
      <NavigationContainer>
        <Provider store={store}>
          <PaperProvider>
            <StatusBar style="dark" />
            <Wrapper
              behavior={Platform.OS === "ios" ? "padding" : undefined}
              enabled
            >
              {children}
            </Wrapper>
          </PaperProvider>
        </Provider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default ThemeManager;
