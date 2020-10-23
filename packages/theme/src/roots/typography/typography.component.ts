import { createGlobalStyle, css } from 'styled-components';

const Typography = createGlobalStyle`
  ${({ theme }) => {
    const { fontSize, fontFamily, lineHeight } = theme.typography;

    return css`
      html {
        font-size: ${fontSize};
      }

      body {
        font-family: ${fontFamily};
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      small {
        line-height: ${lineHeight};
      }
    `;
  }};
`;

export default Typography;
