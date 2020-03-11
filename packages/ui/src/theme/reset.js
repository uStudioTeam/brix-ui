import { css } from 'styled-components';

const reset = css`
  :focus {
    outline: none;
  }

  p,
  dd,
  dl,
  figure,
  blockquote {
    margin: 0;
  }

  blockquote,
  q {
    quotes: none;
  }

  ul,
  ol {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  th {
    font-weight: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
  }

  audio,
  video {
    display: block;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  iframe {
    border: none;
  }

  pre,
  code,
  kbd,
  samp {
    font-family: monospace;
    font-size: inherit;
  }

  abbr {
    border: none;
    text-decoration: none;
  }

  b,
  strong {
    font-weight: inherit;
  }

  i,
  em {
    font-style: inherit;
  }

  dfn {
    font-style: inherit;
  }

  mark {
    background-color: transparent;
    color: inherit;
  }

  small {
    font-size: inherit;
  }

  sub,
  sup {
    position: relative;
    vertical-align: baseline;
    font-size: inherit;
    line-height: 0;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    padding: 0;
    margin: 0;
    border: none;
    border-radius: 0;
    box-shadow: none;
    background-color: transparent;
    color: inherit;
    letter-spacing: inherit;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-align: left;
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    cursor: pointer;
    -webkit-appearance: none;
  }

  textarea {
    resize: none;
    overflow-y: auto;
    overflow-x: hidden;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: none;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    outline: none;
  }

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  fieldset {
    padding: 0;
    margin: 0;
    border: none;
  }

  legend {
    display: block;
    padding: 0;
    white-space: normal;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  select::-ms-expand {
    display: none;
  }

  svg {
    display: block;
    width: 100%;
    height: 100%;
    fill: currentColor;
  }

  [hidden] {
    display: none;
  }

  :disabled,
  .disabled {
    cursor: not-allowed;
  }

  ::-ms-clear {
    display: none;
  }

  :-webkit-autofill {
    box-shadow: 0 0 100px #fff inset;
    -webkit-text-fill-color: currentColor;
  }
`;

export default reset;
