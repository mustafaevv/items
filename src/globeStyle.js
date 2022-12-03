import { createGlobalStyle } from "styled-components";
// import "https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&display=swap";

const GlobeStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: #FAF5E9;
    font-family: 'Goldman';
  }
  h6{
    color: #000;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: .5em;
  }

`;

export default GlobeStyle;
