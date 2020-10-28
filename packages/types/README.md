# @brix-ui/types

Runtime and compile time types for Brix UI.

_Intended for internal use._

---

## Installation

```shell script
npm i @brix-ui/types
```

```shell script
yarn add @brix-ui/types
```

> Please note that TypeScript is required to use `d.ts` files

## Usage

Most of the types here (represented by `as const` objects) were created instead of TypeScript's `enums`
to avoid of their drawbacks. However, they are just plain JavaScript objects, which can be enumerated and
used just like normal objects.
In TypeScript, though, we use them to describe collections of strings (mostly in union types).

Some types, also, have their respective equivalent in the [`prop-types`](../prop-types/README.md) package.
