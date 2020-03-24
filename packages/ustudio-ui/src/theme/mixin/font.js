import { css } from "styled-components";

const fontSize = ({ fontSize }) => css`
  font-size: ${fontSize / 16}rem;
  line-height: 1.375;
`;

const sans = () => css`
  font-family: var(--f-body), sans-serif;
`;

export const Font = {
  codeRegular: () => css`
    margin: 0;
    font-family: var(--f-code), monospace;
    font-weight: 400;
    ${fontSize({ fontSize: 13 })}
  `,
  bodySmall: () => css`
    font-weight: 400;
    letter-spacing: 0.5px;
    ${fontSize({ fontSize: 12 })}
    ${sans()}
  `,
  bodyRegular: () => css`
    ${fontSize({ fontSize: 16 })}
    ${sans()}
  `,
  bodyItalic: () => css`
    font-style: italic;
    ${Font.bodyRegular()}
  `,
  bodyUnderlined: () => css`
    text-decoration: underline;
    ${Font.bodyRegular()}
  `,
  bodyBold: () => css`
    font-weight: 700;
    ${Font.bodyRegular()}
  `,
  caption: () => css`
    font-size: 0.75rem;
    font-weight: 600;
    font-variant: all-small-caps oldstyle-nums;
    line-height: 1;
    letter-spacing: 1px;
    ${sans()}
  `,
  h1: () => css`
    font-weight: 900;
    letter-spacing: -0.8px;
    ${fontSize({ fontSize: 46 })}
    ${sans()}
  `,
  h2: () => css`
    font-weight: 700;
    letter-spacing: -0.35px;
    ${fontSize({ fontSize: 32 })}
    ${sans()}
  `,
  h3: () => css`
    font-weight: 700;
    letter-spacing: -0.28px;
    ${fontSize({ fontSize: 24 })}
    ${sans()}
  `,
  h4: () => css`
    font-weight: 600;
    letter-spacing: -0.25px;
    ${fontSize({ fontSize: 22 })}
    ${sans()}
  `,
  h5: () => css`
    font-weight: 400;
    ${fontSize({ fontSize: 20 })}
    ${sans()}
  `,
  h6: () => css`
    font-weight: 300;
    font-variant: all-small-caps oldstyle-nums;
    letter-spacing: 1px;
    ${fontSize({ fontSize: 16 })}
    ${sans()}
  `,
  articleRegular: () => css`
    font-family: var(--f-article), serif;
    ${fontSize({ fontSize: 14 })}
  `,
  articleBold: () => css`
    font-style: italic;
    ${Font.articleRegular()}
  `,
  articleUnderlined: () => css`
    text-decoration: underline;
    ${Font.articleRegular()}
  `,
};
