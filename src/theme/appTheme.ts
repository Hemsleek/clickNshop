type ThemeType = typeof appThemes;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

// Width : 360px
// Height : 640px, 1055px

export const appThemes = {
  primaryColor: "red",
  shopBlack: "#000",
};
