![logo](https://raw.githubusercontent.com/uStudioCompany/ustudio-ui/develop/banner.jpg)

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://ustudiocompany.github.io/ustudio-ui)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

---

# Installation

This library is available as an [npm package](https://www.npmjs.com/package/@ustudio/ui).

**Important note:** `styled-components`, `react`, `react-dom` are peer dependencies, so make sure they are installed in your app.

```shell script
$ npm i @ustudio/ui
# or
$ yarn add @ustudio/ui
```

---

## Usage

First of, wrap your main component in our `<ThemeProvider />` to gain access to the bundled styles.

```jsx
import React from 'react';

import { ThemeProvider } from '@ustudio/ui/theme';

const App = () => <ThemeProvider>...</ThemeProvider>;
```

After that feel free to import and use all of our [components](/components) and [hooks](/docs/hooks) in your application! ;)

Every component can be imported in two ways: either `default` from component folder, or `named` from root:

```jsx
import Button from '@ustudio/ui/components/Button';
// or
import { Button } from '@ustudio/ui';
```

Also, make sure to read our [theming](/docs/theming) guide to squeeze out all the power of uStudio UI Kit and achieve the best
look and feel.

## Browsers support

uStudio UI supports the latest, stable releases of all major browsers and platforms. It also supports Internet Explorer 11. You don't need to provide any JavaScript polyfill as it manages unsupported browser features internally and in isolation.

| IE  | Edge  | Firefox | Chrome | Safari |
| --- | ----- | ------- | ------ | ------ |
| 11  | >= 14 | >= 52   | >= 49  | >= 10  |
