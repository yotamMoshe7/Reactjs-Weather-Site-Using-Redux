import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  height: 100vw;
  width: 100vw;
  background-image: url("./assets/background-image/background4.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`