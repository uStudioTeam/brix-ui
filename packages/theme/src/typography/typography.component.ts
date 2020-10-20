import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  html {
    font-size: 16px;
  }
  
  body {
    font-family: var(--f-body);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  small {
    line-height: 1.375;
  }
`;

export default Typography;
