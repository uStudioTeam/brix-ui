# Contributing

## Requirements

### Install

- install packages only with [Yarn](https://yarnpkg.com/);
- all installs must be from root directory.

### Usage

- Run all npm scripts from root package.json.

## Available NPM scripts

- `yarn ustudio-ui:dev` - Start Storybook for development components;
- `yarn ustudio-ui:build` - Build components (to `packages/ustudio-ui/lib`) for usage in website and publication;
- `yarn ustudio-ui:release` - Build components (to `packages/ustudio-ui/lib`) and run `standard-version` to bump package version and create a new git tag;
- `yarn ustudio-ui:publish` - Publish `ustudio-ui` package to NPM and GitHub registries;
- `yarn docs-website:dev` - Start dev server for development documentation website (include command `ustudio-ui:build`);
- `yarn docs-website:build` - Build documentation website (to `packages/docs-website/dist`) for deploy to production (include command `ustudio-ui:build`);
- `yarn docs-website:deploy` - Deploy documentation website bundle to Github Pages (include commands: `ustudio-ui:build`, `docs-website:build`).

## Documentation Website Development

- all links must be used from `shared/Link.tsx`;
- all connections of static resources from `public` folder must have path with prefix - `process.env.BASE_URL` (example - `<img src={'${process.env.BASE_URL}/assets/images/...'}> alt="..."`);
- for deploy documentation website to Github Page you need create file `.env` in `packages/docs-website` with content like in `.env.example` with variable `BASE_URL=/YOUR_REPO_NAME`.
