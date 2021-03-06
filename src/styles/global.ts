import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --highlight: #e20e8d;
    --background: #030518;
    --white: #eee;

    --container: 100rem;

    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  html,
  body,
  #__next {
    background: var(--background);
    color: var(--white);
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  p {
    font-size: 2rem;
    line-height: var(--medium);
  }

  a {
    color: var(--highlight);
  }
`;

export default GlobalStyles;
