# @brix-ui/icons

SVG icons as React components.

---

## Installation

```shell script
npm i @brix-ui/icons # react react-dom
```

```shell script
yarn add @brix-ui/icons # react react-dom
```

> Make sure to have `react` and `react-dom` installed in your package as they are included in our peer dependencies.

## Usage

Every icon present in this package is a pure React component, wrapping plain `svg` element.
Each component is exported by default and gives access to the `ref` and `className` props, as well as standard
`svg` attributes.

```typescript jsx
import Times from '@brix-ui/icons/times';
```
