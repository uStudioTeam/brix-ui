import { createGlobalStyle } from 'styled-components';

const Reset = createGlobalStyle`
/* custom-reset.css | 27.08.2018 | https://yurch-html.github.io/dist/custom-reset.html */

*,
*:before,
*:after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  height: 100%;
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  html {
    display: flex;
    flex-direction: column;
  }
}

body {
  color: var(--c-base-strong);
  background-color: var(--c-base-weak);
  
  transition: background-color 200ms, color 200ms;
  
  display: flex;
  flex-direction: column;
  min-height: 100%;
  margin: 0;
  text-rendering: optimizeLegibility;
  text-decoration-skip: objects;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
}

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
  display: block;
  border: none;
}

iframe {
  border: none;
}

pre,
code,
kbd,
samp {
  font-size: inherit;
}

a {
  background-color: transparent;
  text-decoration: none;
  color: inherit;
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
  bottom: -.25em;
}

sup {
  top: -.5em;
}

button,
input,
textarea {
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
  background-color: transparent;
  font: inherit;
  color: inherit;
  letter-spacing: inherit;
}

button,
input {
  overflow: visible;
}

button {
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
  -webkit-appearance: none;
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

::-webkit-input-placeholder {
  color: inherit;
  opacity: 1;
  transition: opacity .3s;
}

::-moz-input-placeholder {
  color: inherit;
  opacity: 1;
  transition: opacity .3s;
}

:-moz-placeholder {
  color: inherit;
  opacity: 1;
  transition: opacity .3s;
}

:-ms-input-placeholder {
  color: inherit;
  opacity: 1;
  transition: opacity .3s;
}

:focus::-webkit-input-placeholder {
  opacity: 0;
}

:focus::-moz-input-placeholder {
  opacity: 0;
}

:focus:-moz-placeholder {
  opacity: 0;
}

:focus:-ms-input-placeholder {
  opacity: 0;
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

:disabled {
  cursor: not-allowed;
}

::-ms-clear {
  display: none;
}

:-webkit-autofill {
  box-shadow: 0 0 100px #fff inset;
  -webkit-text-fill-color: currentColor;
}

::selection {
  color: var(--c-base-strong);
  background-color: var(--c-accent-weak);
}
`;

export default Reset;
