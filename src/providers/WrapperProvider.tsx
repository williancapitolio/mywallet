import { Provider } from "react-redux";

import { store } from "../store";

import { ThemeProvider } from "styled-components";

import Dark from "../styles/themes/Dark";
/* import Light from "../styles/themes/Light"; */

import { GlobalStyles } from "../styles/Global";

type WrapperProviderProps = {
  children: React.ReactNode;
};

export const WrapperProvider = ({ children }: WrapperProviderProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Dark}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </Provider>
  );
};
