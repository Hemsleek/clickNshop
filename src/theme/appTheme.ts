type ThemeType = typeof appThemes;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

// Width : 360px
// Height : 640px, 1055px

// import styled, { css } from "styled-components/native";
// import {
//   heightPercentageToDP as hp,
//   widthPercentageToDP as wp,
// } from "react-native-responsive-screen";

export const appThemes = {
  primaryColor: "red",
  shopBlack: "#000",
  lightBlack: "#282828",
  shopRed: "#ED1C24",
  lightGrey: "#FCF8F8",
};
