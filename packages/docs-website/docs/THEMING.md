# Theming

Under the hood we use `styled-components` to drive our components' look and behaviour. Therefore, the best way to
explore full potential of this ui-kit is to extend the styles we provide. Below are the ways you could achieve this.

## Table of contents

- [Extending](#extending)
  - [ThemeProvider](#themeprovider)
    - [Colors palette](#colors-palette)
    - [Typography](#typography)
    - [Media breakpoints](#media-breakpoints)
    - [Indents](#indents)
    - [Layers](#layers)
  - [GlobalStyles](#globalstyles)
  - [styled(Component)](<#styled(component)>)
  - [CSS classes](#css-classes)
  - [styled prop](#styled)
- [Mixins](#mixins)
  - [Font](#font)
  - [Style](#style)
  - [Device](#device)
  - [Screen](#screen)

---

## Extending

---

### ThemeProvider

First of all, during the process of installation you've already met our `<ThemeProvider />` component. It injects the styles
of the components into your page and gives access to basic features and variables.

To access these variables inside your styles just use them as basic CSS variables like:

```css
a {
  color: var(--c-primary);
}
```

To override provided variables add an `override` prop to the `<ThemeProvider />` component:

```jsx
import { ThemeProvider } from 'ustudio-ui/theme';

<ThemeProvider override={{ ... }}>
    { /* ... */ }
</ThemeProvider>
```

**Important note:** it is not possible to dynamically change the theme with just an `override` prop. Instead, we recommend
conditionally rendering `<ThemeProvider />` with an override you want to be used.

`<ThemeProvider />` by default consumes a theme with a following interface which is merged with your provided `override`:

```typescript
interface Theme {
  breakpoint?: Partial<Record<Breakpoint, number>>;
  indent?: Partial<Record<'small' | 'medium' | 'regular' | 'large', string>>;
  palette?: Partial<Record<Color, string>>;
  font?: Partial<Record<'body' | 'code' | 'article', string>>;
  layer?: Partial<Record<'topmost' | 'top' | 'middle' | 'bottom', number>>;
  transition?: string;
  borderRadius?: string;
}
```

Each part of the `override` is explained below.

---

#### Colors palette

We provide a ready-to-use color scheme that is being consumed by all of our components:

```css
--c-lightest: #fcfcfc;
--c-light: #f2f2f2;
--c-neutral: #ccc;
--c-dark: #8c8c8c;
--c-darkest: #1a1a1a;

--c-negative-light: #e3871a;
--c-negative: #db821a;

--c-positive-light: #97e31a;
--c-positive: #8dd419;

--c-primary-light: #1e96ff;
--c-primary: #1a81db;

--c-white: #fcfcfc;
--c-black: #1a1a1a;
```

The main principle here is to not be tied to the color name but to the meaning behind it, so that if you look forward
to changing these colors, their semantics stays clear.

> An exception to this may be, for example, defining a dark theme where `--c-lightest` becomes `--c-darkest`.

Also, these colors are used in the shadow variables:

```css
--shadow: 0 0 4px;
--s-light: var(--shadow) var(--c-light);
--s-neutral: var(--shadow) var(--c-neutral);
--s-dark: var(--shadow) var(--c-dark);
--s-darkest: var(--shadow) var(--c-darkest);
--s-negative: var(--shadow) var(--c-negative);
--s-positive: var(--shadow) var(--c-positive);
--s-primary: var(--shadow) var(--c-primary);
```

And gradient variables:

```css
--g-negative: linear-gradient(to bottom, var(--c-negative) 0%, var(--c-negative-light) 100%);
--g-positive: linear-gradient(to bottom, var(--c-positive) 0%, var(--c-positive-light) 100%);
--g-primary: linear-gradient(to bottom, var(--c-primary) 0%, var(--c-primary-light) 100%);
```

---

#### Typography

We've developed a typography system that should fill all of your needs, starting with exposed variables:

```css
--f-body: Source Sans Pro;
--f-article: Lora;
--f-code: Source Code Pro;
```

**Important note:** Fonts above are not supplied with our bundle, thus we recommend downloading/including them by hand or using other fonts
available to you.

Next up, we provide mixins and extend CSS for each typography element and some of their variants. See [Text](/components/text) component
for more on that.

---

#### Media breakpoints

Do not fear the responsive design! Use these breakpoint variables to control the way your application responds to the screen size:

```css
--bp-xs: 576px;
--bp-md: 768px;
--bp-lg: 992px;
--bp-xl: 1200px;
```

For example, these variables are being used by our [Grid](/components/grid) components.

---

#### Indents

Next batch of variables we expose for override are indents. They help contain a solid balanced system, where everything
fits nicely in its own space.

```css
--i-small: 0.25rem;
--i-medium: 0.5rem;
--i-regular: 1rem;
--i-large: 2rem;
```

---

#### Layers

Layers are used to determine z-index hierarchy of your elements. We provide four variables to be used for the purpose.

```css
--l-topmost: 1000;
--l-top: 800;
--l-middle: 500;
--l-bottom: 100;
```

---

### GlobalStyles

If you tend to consider our approach and use `styled-components` as your primary styling tool (and we recommend doing so),
you could use `<GlobalStyles />` component to extend and supplement existing styles and variables (or even override them too).

Just place it below your `<App />` component like so:

```jsx
import { ThemeProvider } from 'ustudio-ui/theme';

<ThemeProvider>
  <App />

  <GlobalStyles />
</ThemeProvider>;
```

**Important note:** Reset and normalized styles are already included! No need to add them (if you don't want something specific
of course).

---

### styled(Component)

Another way to customize our components is to extend them with `styled` function. Usually it influences the container element
of a component. Nice example of such customization is our "Show code" dropdown you can see in every component's page.

```typescript
const ShowCode = styled(Dropdown)`
  border: none;
  box-shadow: var(--neumo-shadow);

  &:hover {
    border: none;
    box-shadow: var(--neumo-shadow);
  }
`;
```

> `var(--neumo-shadow)` is a new shadow variable we added using the `<GlobalStyles />` approach.

---

### CSS classes

At the time being, using CSS classes is not recommended (although possible). The reason for this is that `styled-components`
**may** place its own styles at the bottom of `<head />` disallowing to override existing CSS properties inside of components.

You still can add new properties to the components by using their exposed `classNames` property. It containes references
to all styled elements inside of them, thus providing you a way to extend them. See any component's props for a list of
available `classNames`.

`classNames` interface should look like the following:

```typescript
{
    Content: '...',
    Header: '...',
    /* ... */
}
```

---

### `styled` prop

All components have a special `styled` prop. It is similar to `classNames`, except it
provides a way to extend every component inside of a given one with a `css` function
styles (imported from `styled-components`).

```typescript jsx
import Checkbox from 'ustudio-ui/components/Checkbox';

<Checkbox
  styled={{
    Checkbox: css`
      border: 1px solid black;
    `,
  }}
/>
```

---

## Mixins

You could add to your styles by using our mixins collected in a `Mixin` object.

**Important note:** these are specific to `styled-components` only.

```typescript
import { Mixin } from 'ustudio-ui/theme';

/* ... */
```

---

### Font

Gives access to all [Text](/components/text) variants and appearances.

```typescript
const Font = {
  codeRegular: () => string,
  bodySmall: () => string,
  bodyRegular: () => string,
  bodyItalic: () => string,
  bodyUnderlined: () => string,
  bodyBold: () => string,
  caption: () => string,
  h1: () => string,
  h2: () => string,
  h3: () => string,
  h4: () => string,
  h5: () => string,
  h6: () => string,
  articleRegular: () => string,
  articleBold: () => string,
  articleUnderlined: () => string,
};
```

---

### Style

An assembly of some basic styles applied throughout different components.

```typescript
const Style = {
  borderWithBottom: ({ colorAll, colorBottom }) => string,
  borderAll: ({ color }) => string,
  linkUnderline: () => string,
  inputPadding: () => string,
};
```

---

### Device

Injects device-specific media queries (mobile and desktop) making it possible to distinguish styles between them.

```typescript
const Device = {
  mobile: style => string,
  desktop: style => string,
};
```

---

### Screen

Injects screen-specific media queries. Operates on `min-width` property set to the breakpoint value.

```typescript
const Screen = {
  xs: style => string,
  md: style => string,
  lg: style => string,
  xl: style => string,
};
```
