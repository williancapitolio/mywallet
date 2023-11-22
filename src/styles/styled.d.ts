import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      text: {
        primary: string;
        secondary: string;
        light: string;
        dark: string;
      };
      background: {
        primary: string;
        secondary: string;
        tertiary: string;
        top: string;
      };
      button: {
        ok: string;
        danger: string;
        warning: string;
      };
      boxShadow: string;
    };
  }
}
