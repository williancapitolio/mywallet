import { useAppSelector } from "../hooks/use-app-selector";

import { ThemeProvider } from "styled-components";

import Dark from "../styles/themes/Dark";
import Light from "../styles/themes/Light";

import { GlobalStyles } from "../styles/Global";

type StylesProviderProps = {
  children: React.ReactNode;
};

export const StylesProvider = ({ children }: StylesProviderProps) => {
  const theme = useAppSelector((state) => state.theme.title);

  return (
    <ThemeProvider theme={theme === "dark" ? Dark : Light}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
