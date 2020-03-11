# Hooks

Inside of our inner workings we use many helpful functions. Some of them are exposed to you.

## Table of contents

- [useDropdown](#usedropdown)
- [useKeyPressClose](#usekeypressclose)

---

### useDropdown

`useDropdown` makes it possible to turn anything into, you guess it, a dropdown!
It consumes a `control` boolean value, that lets it know about state changes and `dimension` string value, which represents
the dimension you want to work with.

```typescript
// import
import { useDropdown } from '@ustudio/ui/hooks';

// interface
function useDropdown<E extends HTMLElement, D extends 'width' | 'height' = 'height'>(
  control: boolean,
  dimension: D
): { ref: RefObject<E> } & { [dimension in D]: string };
```

In return you get an object with `ref` property, that should be placed on the element dimension of which you'd like to measure and a
dimension value (either `width` or `height`) that you can supply to its wrapper.

Dimension is either `auto`, `0` or a number value with `px` appended.

For example, [Dropdown](/components/dropdown) is our native component that explores on this functionality.

---

### useKeyPressClose

`useKeyPressClose` lets you control switch behaviour of a component by a key press. For example, our [Modal](/components/modal)
component closes when you press 'Escape' key.

```typescript
// import
import { useKeyPressClose } from '@ustudio/ui/hooks';

// interface
function useKeyPressClose(closeCallback: (control: boolean) => void, key?: number): void;
```
