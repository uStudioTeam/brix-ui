import { createGlobalStyle, css } from 'styled-components';

const Typography = createGlobalStyle`
  ${({ theme }) => {
    const { font, rootFontSize, defaultFontFamily, baseLineHeight } = theme.typography;

    return css`
      html {
        font-size: ${rootFontSize};
      }

      :root {
        --f-body: ${font.body};
        --f-article: ${font.article};
        --f-code: ${font.code};
      }

      body {
        font-family: ${defaultFontFamily};
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      small {
        line-height: ${baseLineHeight};
      }
    `;
  }};
`;

export default Typography;
