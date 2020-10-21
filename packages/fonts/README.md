# @brix-ui/fonts

Default fonts accepted by the Brix UI theme.

---

## Installation

```shell script
npm i @brix-ui/core # styled-components react react-dom
```

```shell script
yarn add @brix-ui/core # styled-components react react-dom
```

> Make sure to have `react`, `react-dom` and `styled-components` installed in your package as they are included in our peer dependencies.

## Usage

Main goal of this package is to give almost zero-effort experience of connecting the fonts to your application.
Fonts being used here are the ones implemented in the Brix UI design system:

- `Source Sans Pro` for `body`
- `Merriweather` for `article`
- `Inconsolata` for `code`

The easiest way to use this package is by including the `<Fonts />` component inside out `<ThemeProvider />`:

```typescript jsx
import ThemeProvider from '@brix-ui/theme';
import Fonts from '@brix-ui/fonts';

// ...

<ThemeProvider>
  <App />

  <Fonts />
</ThemeProvider>
```

You also have the ability to override the defaults by providing this component with information about each font
you want to be changed or by writing you own `@font-face` declarations.
