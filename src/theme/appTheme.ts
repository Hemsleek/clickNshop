type ThemeType = typeof appThemes;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

// Width : 414px
// Height : 896px

export const appThemes = {
  primaryColor: "red",
};
