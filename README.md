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

## Requirements

### Install

- install packages only with [Yarn](https://yarnpkg.com/);
- all installs must be from root directory.

### Usage

- Run all npm scripts from root package.json.

## Available NPM scripts

- `yarn ui:dev` - Start Storybook for development components;
- `yarn ui:build` - Build components (to `packages/ui/lib`) for usage in website and publication;
- `yarn ui-website:dev` - Start dev server for development documentation website (include command `ui:build`);
- `yarn ui-website:build` - Build website (to `packages/ui-website/dist`) for deploy to production (include command `ui:build`);
- `yarn ui-website:deploy` - Deploy website bundle to Github Pages (include commands: `ui:build`, `ui-website:build`).
