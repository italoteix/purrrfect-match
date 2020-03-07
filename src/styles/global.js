import { createGlobalStyle } from 'styled-components';

import Brown from '../assets/fonts/Brown-Regular.woff';
import BrownItalic from '../assets/fonts/Brown-RegularItalic.woff';
import BrownBold from '../assets/fonts/Brown-Bold.woff';
import BrownBoldItalic from '../assets/fonts/Brown-BoldItalic.woff';
import BrownLight from '../assets/fonts/Brown-Light.woff';

export default createGlobalStyle`
@font-face {
  font-family: 'Brown';
  font-style: normal;
  font-weight: 400;
  src: local('Brown'),local('Brown Regular'),local('Brown-Regular'), url(${Brown}) format('woff');
}
@font-face {
  font-family: 'Brown';
  font-style: italic;
  font-weight: 400;
  src: local('Brown RegularItalic'),local('Brown-RegularItalic'), url(${BrownItalic}) format('woff');
}
@font-face {
  font-family: 'Brown';
  font-style: normal;
  font-weight: 600;
  src: local('Brown Bold'),local('Brown-Bold'), url(${BrownBold}) format('woff');
}
@font-face {
  font-family: 'Brown';
  font-style: italic;
  font-weight: 600;
  src: local('Brown BoldItalic'), local('Brown-BoldItalic'), url(${BrownBoldItalic}) format('woff');
}
@font-face {
  font-family: 'Brown';
  font-style: normal;
  font-weight: 300;
  src: local('Brown Light'), local('Brown-Light'), url(${BrownLight}) format('woff');
}

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  html, body, #root {
    min-height: 100%
  }

  #root {
    --white: #f3f3ff;
    --light-blue: #b4d9ff;
    --dark-blue: #5452F6;
  }

  body {
    background: linear-gradient(347.71deg, #5452F6 12.93%, rgba(84, 82, 246, 0) 241.45%);
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: 'Brown', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
