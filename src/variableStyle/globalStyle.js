import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI',
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  background-color: #fff;
  color: #212121;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}`;

export default GlobalStyle;
