# @brix-ui/hooks

Batch of useful UI-related React hooks.

---

## Installation

```shell script
npm i @brix-ui/hooks # react react-dom
```

```shell script
yarn add @brix-ui/hooks # react react-dom
```

> Make sure to have `react` and `react-dom` installed in your package as they are included in our peer dependencies.

## Usage

Every hook functions is exported by default and should be used inside React components with respect to the
[rules of hooks](https://reactjs.org/docs/hooks-rules.html).

```typescript jsx
import useMediaQuery from '@brix-ui/hooks/use-media-query';

const Component = () => {
  const isMd = useMediaQuery('screen and (min-width: 768px)');

  // ...
};
```
