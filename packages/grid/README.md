# @brix-ui/grid

React grid system based on CSS-Grid module.

---

## Installation

```shell script
npm i @brix-ui/grid # styled-components react react-dom
```

```shell script
yarn add @brix-ui/grid # styled-components react react-dom
```

> Make sure to have `react`, `react-dom` and `styled-components` installed in your package as they are included in our peer dependencies.

## Usage

This package provides three modules, two of which being React components: `aria-builder`, `<Grid />` and `<Cell />`.

### `aria-builder`

This is mostly an internal module being used by the other two present in this package.
Its purpose is to provide the context for proper `grid-area` values generation and distribution inside the grid.
Hovewer, this can easily be used by any other implementation. Please, look at the source code of [`Grid`](src/grid/grid.component.tsx) and [`Cell`](src/cell/cell.component.tsx)
components if you'd like to build your own variations of those.

### `<Grid />`

`Grid` component is the equivalent of CSS' `display: grid`. Everything inside it is being displayed as a grid inside
the areas, which allows for constructing flexible and intuitive grids.

It supports five breakpoints (`xs`, `sm`, `md`, `lg`, `xl`), `xs` being the default one for its props.

You must use this component in conjunction with our `Cell` component to achieve full funcionality of this package.

### `<Cell />`

`Cell` is basically a cell inside of a standard CSS grid.

It behaves the same way it does in a pure CSS, constructing the grid with the use of `grid-area` property.
This component also supports five breakpoints similarly to the `<Grid />` component.

```typescript jsx
import { Grid, Cell } from '@brix-ui/grid';

// ...

<Grid direction="column">
  <Cell>
    <header>
      Website header
    </header>
  </Cell>

  <Cell size={4}>
    <Grid direction="column" gap="16px" md={{ direction: 'row' }}>
      <Cell md={{ size: 4 }}>
        <main>
          Content
        </main>
      </Cell>

      <Cell md={{ size: 2, offset: [1] }}>
        <aside>
          Sidebar
        </aside>
      </Cell>
    <Grid />
  </Cell>

  <Cell size={2} xs={{ size: 1 }}>
    <footer>
      Website footer
    </footer>
  </Cell>
</Grid>
```
