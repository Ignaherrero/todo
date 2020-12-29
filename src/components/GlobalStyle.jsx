import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root{
    font-size: 12px;
  }

  /* reset */
  ul {
   list-style: none;
   padding: 0;
   margin: 0;
  }
 
  a {
   color: blue;
   text-decoration: none;
  }

  /* Typography */
  body{
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    user-select: none;
    min-height: 100vh;
  }
`;

export default GlobalStyles;
