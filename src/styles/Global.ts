import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 1rem;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  font-weight: 400;
}

body {
  background-color: ${(props) => props.theme.colors.background.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

div#root {
  width: 100%;
  max-width: 64rem;
  padding: .5rem 1rem;
}

a {
  text-decoration: none;
  color: inherit;
}

button, select {
  cursor: pointer;
}
`;
