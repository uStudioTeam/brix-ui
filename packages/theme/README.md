# @brix-ui/theme

Theme package providing light and dark modes as well as CSS/JS variables and helpers used in theming.

---

## Installation

```shell script
npm i @brix-ui/theme # styled-components react react-dom
```

```shell script
yarn add @brix-ui/theme # styled-components react react-dom
```

> Make sure to have `react`, `react-dom` and `styled-components` installed in your package as they are included in our peer dependencies.

## Usage

Along with `<ThemeProvider />` component, which has to be wrapper around you application, we export two important
hooks – `useTheme` and `useThemeMode`.
As mentioned in the description, Brix UI theme and design system support both light and dark modes, making it
easy to switch between the two.

First and foremost, setup the provider:

```typescript jsx
<ThemeProvider>
  <App />
</ThemeProvider>
```

Or as [render props](https://en.reactjs.org/docs/render-props.html):

```typescript jsx
<ThemeProvider>
  {({ mode }) => {
    return <App themeMode={mode ? 'Light' : 'Dark'} />;
  }}
</ThemeProvider>
```

Then, use all the features of our theme inside any part of your React application:

### CSS

```css
.class {
  color: var(--c-accent-strong);
}
```

### styled-components

```typescript
import { shadow } from '@brix-ui/theme/mixin';

const Button = styled.button(
  ({ theme }) => css`
    color: ${theme.palette['accent-strong']};

    box-shadow: ${shadow('base-strong', 0.1)};
  `
);
```

### React (switching theme mode)

```typescript jsx
import { useTheme } from '@brix-ui/theme/hooks';

import Flex from '@brix-ui/core/switch';
import Switch from '@brix-ui/core/switch';
import Text from '@brix-ui/core/switch';

const Component = () => {
  const { switchMode, mode } = useTheme();

  return (
    <Flex as="label" verticalAlign="center" gap={{ horizontal: '8px' }}>
      <Switch onChange={() => switchMode()} />

      <Text>{mode ? 'Light' : 'Dark'}</Text>
    </Flex>
  );
};
```

### Fonts

Out of the box we provide **no default fonts**.

To connect the fonts defined as default in our design system you have an option to create your own `@font-face`
rules.

To override predefined `font-family` names for each of the font variants (`body`, `article`, `code`),
you can either override custom properties for each of those variants (prefixed with `f-`)
or pass them into the `theme` prop of the `ThemeProvider` component:

```typescript jsx
<ThemeProvider
  theme={{
    typography: {
      font: {
        body: 'Roboto, sans-serif',
        article: 'Lora, serif',
        code: '"Fira Code", monospace',
      },
    },
  }}
/>
```

An example of the `@font-face` rules we expect to receive:

```css
@font-face {
  font-family: 'Source Sans Pro';
  font-weight: 900;
  src: url('') format('');
}

@font-face {
  font-family: 'Source Sans Pro';
  font-weight: 700;
  src: url('') format('');
}

@font-face {
  font-family: 'Source Sans Pro';
  font-weight: 600;
  src: url('') format('');
}

@font-face {
  font-family: 'Source Sans Pro';
  font-weight: 400;
  src: url('') format('');
}

@font-face {
  font-family: 'Source Sans Pro';
  font-weight: 300;
  src: url('') format('');
}

@font-face {
  font-family: Merriweather;
  font-weight: 900;
  src: url('') format('');
}

@font-face {
  font-family: Merriweather;
  font-weight: 400;
  src: url('') format('');
}

@font-face {
  font-family: Merriweather;
  font-weight: 300;
  src: url('') format('');
}

@font-face {
  font-family: Inconsolata;
  font-weight: 800;
  src: url('') format('');
}

@font-face {
  font-family: Inconsolata;
  font-weight: 400;
  src: url('') format('');
}

@font-face {
  font-family: Inconsolata;
  font-weight: 300;
  src: url('') format('');
}
```
