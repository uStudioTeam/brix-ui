# @brix-ui/core

React UI components library by [uStudio Company](https://github.com/uStudioCompany).

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

`@brix-ui/core` package implements different UI components under the Brix UI design system.
Every component is exported by default from its folder along with its props and, sometimes, some helper entities.

```typescript jsx
import Button from '@brix-ui/core/button';
import { Span } from '@brix-ui/core/text';

// ...

<Button intent="success">
  <Span lineHeightCompensation>Download</Span>
</Button>
```

It's also worth mentioning that we have a secret `_internal` folder, which accomodates some base components
that are not the part of our public API (but you still can access them, of course).
