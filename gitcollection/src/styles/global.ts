// vamos definir os estilos globais 
import { createGlobalStyle } from "styled-components";
import imgBackground from '../assets/background.svg'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  body {
    background: #f0f0f0 url(${imgBackground}) no-repeat 70% top;
  }
  #root { // o rem depende do tamanho do dispositivo (responsividade) 
    max-width: 960px;
    margin: 0 auto;
    padding: 2.5rem 1.25rem;
  }
`
