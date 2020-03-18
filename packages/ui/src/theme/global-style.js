import { createGlobalStyle, css } from 'styled-components';

import reset from './reset';
import { Mixin } from './mixin';

export const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
    // Variables
    :root {
      --transition: ${theme.transition};

      // Breakpoints

      ${Object.keys(theme.breakpoint).reduce((map, bp) => map + `--bp-${bp}: ${theme.breakpoint[bp]}px;`, ``)};

      // Blocks

      --i-small: ${theme.indent.small};
      --i-medium: ${theme.indent.medium};
      --i-regular: ${theme.indent.regular};
      --i-large: ${theme.indent.large};

      --border-radius: ${theme.borderRadius};

      // Colors

      ${Object.keys(theme.palette).reduce((map, c) => map + `--c-${c}: ${theme.palette[c]};`, ``)};

      // Gradients

      --g-negative: linear-gradient(to bottom, var(--c-negative) 0%, var(--c-negative-light) 100%);
      --g-positive: linear-gradient(to bottom, var(--c-positive) 0%, var(--c-positive-light) 100%);
      --g-primary: linear-gradient(to bottom, var(--c-primary) 0%, var(--c-primary-light) 100%);

      // Shadows

      --shadow: 0 0 4px;
      --s-light: var(--shadow) var(--c-light);
      --s-neutral: var(--shadow) var(--c-neutral);
      --s-dark: var(--shadow) var(--c-dark);
      --s-darkest: var(--shadow) var(--c-darkest);
      --s-negative: var(--shadow) var(--c-negative);
      --s-positive: var(--shadow) var(--c-positive);
      --s-primary: var(--shadow) var(--c-primary);

      // Fonts

      --f-body: ${theme.font.body};
      --f-article: ${theme.font.article};
      --f-code: ${theme.font.code};

      // Layers

      ${Object.keys(theme.layer).reduce((map, l) => map + `--l-${l}: ${theme.layer[l]};`, ``)};
    }

    ${reset}

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    html {
      min-height: 100%;
      box-sizing: border-box;
      font-size: 16px;
    }

    body {
      min-height: 100%;
      display: flex;
      flex-direction: column;
      margin: 0;
      background-color: var(--c-lightest);

      ${Mixin.Font.bodyRegular()};
      color: var(--c-darkest);

      text-rendering: optimizeLegibility;
      text-decoration-skip: objects;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-tap-highlight-color: transparent;

      box-sizing: border-box;
    }

    // Text

    a {
      ${Mixin.Style.linkUnderline()};
      text-decoration: none;
      color: var(--c-primary);

      &:active {
        color: var(--c-primary-light);
      }
    }

    code,
    pre {
      ${Mixin.Font.codeRegular()};
    }

    p {
      ${Mixin.Font.bodyRegular()};
    }

    small {
      ${Mixin.Font.bodySmall()};
    }

    strong,
    b {
      ${Mixin.Font.bodyBold()};
    }

    em,
    i {
      ${Mixin.Font.bodyItalic()};
    }

    h6 {
      ${Mixin.Font.h6()};
    }

    h5 {
      ${Mixin.Font.h5()};
    }

    h4 {
      ${Mixin.Font.h4()};
    }

    h3 {
      ${Mixin.Font.h3()};
    }

    h2 {
      ${Mixin.Font.h2()};
    }

    h1 {
      ${Mixin.Font.h1()};
    }

    hr {
      margin: 1rem 0 2rem;
      height: 2px;
      border: none;
      background-color: var(--c-neutral);
    }

    table {
      width: 100%;
    }

    thead {
      th {
        padding: var(--i-medium);
        ${Mixin.Font.caption}
      }

      tr {
        border-bottom: 1px solid var(--c-light);
      }
    }

    tbody {
      td {
        padding: var(--i-medium);
      }

      tr:not(:last-child) {
        border-bottom: 1px solid var(--c-light);
      }
    }

    tr {
      text-align: left;
    }

    ::placeholder {
      color: var(--c-neutral);
      transition: opacity var(--transition);
    }

    :focus::placeholder {
      opacity: 0;
    }

    ::selection {
      background-color: var(--c-primary);
      color: var(--c-lightest);
    }

    ::-webkit-scrollbar {
      width: 0.5rem;
    }

    ::-webkit-scrollbar-track {
      padding: 2px;
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 0.5rem;
      background: var(--c-neutral);
      transition: var(--transition);

      &:hover {
        background: var(--c-dark);
      }
    }
  `
);
