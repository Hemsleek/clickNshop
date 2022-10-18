type ThemeType = typeof appThemes;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

export const appThemes = {
  primaryColor: "red",
};
