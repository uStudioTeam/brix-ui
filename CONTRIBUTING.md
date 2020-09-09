# Contributing

## Requirements

- run all scripts only with [yarn](https://yarnpkg.com/);
- all package installations must be performed with `-W` flag, to ensure their installation into workspaces;

## Available scripts

- `start` – start development instance of the `storybook` environment;
- `format`, `lint`, `typecheck` – check code style and types;
- `clear` – delete all build-related files and directories;
- `tsconfig`, `package` – create publish-ready `tsconfig.json` and `package.json` inside each package;
- `prebuild`, `build:js`, `build:dts`, `build` – prepare and build every package;
- `test` – run `jest` tests where available;
- `ci` – run the ci pipeline: lint and check types, clear old build and prepare new build, test the code;

> Although it is recommended to leave all scripts but `start` for `travis-ci`, you can still run everything by yourself.
