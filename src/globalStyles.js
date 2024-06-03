import { createGlobalStyle } from 'styled-components';
import 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap'; // Importing Google Font

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #0d0d0d;
    color: #00ff00;
    font-family: 'Roboto Mono', monospace; /* Updated to a more modern font */
    font-size: 14px; /* Smaller global font size */
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
