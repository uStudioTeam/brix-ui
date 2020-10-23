# @brix-ui/theme

Theme package providing light and dark modes as well as CSS/JS variables and helpers used in theming.

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
But we foresaw your desire to obtain some – [`@brix-ui/fonts`](../fonts/README.md) package comes to help!

It serves two main purposes in your application:

- Sets up main font-family variables: `--font-body`, `--font-article`, `--font-code`.
- Generates `@font-face` declarations and connects them with the font files we provide.

More in-depth guide can be found in the package's [readme](../fonts/README.md).

If you'd like to use your own fonts, you have basically two options:

- Override the defaults in the `<Fonts />` component.
- Make your own version of it, declaring the variables mentioned above and writing `@font-face` declarations.
