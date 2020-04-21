import { createGlobalStyle } from 'styled-components';

import ProximaNovaRegularEot from 'assets/fonts/ProximaNova-Regular.eot';
import ProximaNovaRegularTtf from 'assets/fonts/ProximaNova-Regular.ttf';
import ProximaNovaRegularWoff from 'assets/fonts/ProximaNova-Regular.woff';
import ProximaNovaSemiboldEot from 'assets/fonts/ProximaNova-Semibold.eot';
import ProximaNovaSemiboldWoff from 'assets/fonts/ProximaNova-Semibold.woff';
import ProximaNovaSemiboldTtf from 'assets/fonts/ProximaNova-Semibold.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Proxima Nova';
    src: url(${ProximaNovaRegularEot});
    src: url(${ProximaNovaRegularWoff}) format("woff"),
         url(${ProximaNovaRegularTtf}) format("truetype");
    font-weight: 400;  
  }
  @font-face {
    font-family: 'Proxima Nova';
    src: url(${ProximaNovaSemiboldEot});
    src: url(${ProximaNovaSemiboldWoff}) format("woff"),
         url(${ProximaNovaSemiboldTtf}) format("truetype");
    font-weight: 500;  
  }
    * {
    box-sizing: border-box;
  }  
  body {
    background-color: ${({ theme }) => theme.body}; 
    height: 100%;
    position:absolute;
    top: 0;
    left: 0;
    margin: 0 10px;
    overflow-y: hidden;
    transition: all 0.25s linear;
    font-family: 'Proxima Nova', serif;
    & input, textarea, button {
      font-family: 'Proxima Nova', serif;
    }
  }
`;

export default GlobalStyle;
