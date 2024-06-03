import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #0d0d0d;
    color: #00ff00;
    font-family: 'Roboto Mono', monospace;
    font-size: 14px;
    scroll-behavior: smooth;
  }
  * {
    box-sizing: border-box;
  }
  a {
    color: #00ff00;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #00cc00;
    }
  }
`;

export default GlobalStyle;
