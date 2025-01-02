import { createGlobalStyle } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

  :root {
    --max-width: 1200px;

    --main-background-color: #0E1138;
    --main-footer-color: #CBCBB5;

    --primary-color: #262C65;
    --secondary-color: #BE945E;
    --mc-grey-strong: #323233;
    --mc-grey-light: #808080;
    --mc-grey-text: #e6e6e6;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--main-footer-color);
    font-family: 'Open Sans', serif,  sans-serif;
    color: var(--mc-grey-text);
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    padding: 1rem 2.5rem;
    border: none;
    border-radius: 0.2rem;
    background: var(--secondary-color);
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 2px 2px 3px 1px var(--mc-grey-light);
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; /* vai gerar uns 15px */
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%; /* vai gerar uns 14px */
    }
  }
`;
