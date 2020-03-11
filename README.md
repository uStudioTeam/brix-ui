# [uStudio UI](https://ustudiocompany.github.io/ustudio-ui/) Monorepo

## Requirements

### Install

- install packages only with [Yarn](https://yarnpkg.com/);
- all installs must be from root directory.

### Usage

- Run all npm scripts from root package.json.

## Available NPM scripts

- `yarn ui:dev` - Start Storybook for development components;
- `yarn ui:build` - Build components (to `packages/ui/lib`) for usage in website and publication;
- `yarn ui-website:dev` - Start dev server for development documentation website (include command `ui:build`);
- `yarn ui-website:build` - Build website (to `packages/ui-website/out`) for deploy to production (include command `ui:build`);
- `yarn ui-website:deploy` - Deploy website bundle to Github Pages (include commands: `ui:build`, `ui-website:build`).
