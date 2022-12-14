type ThemeType = typeof appThemes;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

export const appThemes = {
  primaryColor: "rgba(0,0,0,0.1)",
  shopBlack: "#000",
  lightBlack: "#282828",
  shopRed: "#ED1C24",
  lightGrey: "#FCF8F8",
  buttonRed: "#FF5757",
};
