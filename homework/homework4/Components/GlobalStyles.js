import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
  a{
    text-decoration:none;
    color:inherit;
  }

  *{
        box-sizing:border-box;
  }

  body {
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-left: 20px;
  }
`;

export default globalStyles;
