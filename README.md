# Brix UI

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

Minimal UI framework for React built with [TypeScript](https://github.com/microsoft/TypeScript) and [styled-components](https://github.com/styled-components/styled-components).

---

Brix UI is shipping several packages:

- [`contexts`](packages/contexts/README.md)
- [`core`](packages/core/README.md)
- [`fonts`](packages/fonts/README.md)
- [`grid`](packages/grid/README.md)
- [`hooks`](packages/hooks/README.md)
- [`icons`](packages/icons/README.md)
- [`prop-types`](packages/prop-types/README.md)
- [`theme`](packages/theme/README.md)
- [`types`](packages/types/README.md)
- [`utils`](packages/utils/README.md)

Some of these are not intended to be used directly but are required for the others to work.
Most common use-case for Brix UI would be installing the `core` package which provides full-on experience of the framework.

## Installation

```shell script
npm i @brix-ui/core # styled-components react react-dom
```

```shell script
yarn add @brix-ui/core # styled-components react react-dom
```

> Make sure to have `react`, `react-dom` and `styled-components` installed in your package as they are included in our peer dependencies.

## Usage

Before writing any components in your application make sure to provide them with our theme.
This is done by wrapping your application in our `ThemeProvider` component.

```typescript jsx
import ThemeProvider from '@brix-ui/theme';

ReactDOM.render(
  document.querySelector('#root'),
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
```

> More examples can be found in the [`theme`](packages/theme/README.md) package readme.

After that, you are ready to use our framework inside of your application!

```typescript jsx
import Button from '@brix-ui/core/button';
```

> More examples can be found in the [`core`](packages/core/README.md) package readme.

> Please note that in most cases we provide direct default exports for better tree-shaking support.

## Contributing

We are open for your suggestions and contributions to this project. In order to properly help us get better
please refer to the [contributing](CONTRIBUTING.md) and [code of conduct](CODE_OF_CONDUCT.md) documents.

## History

This package continues the story of [`ustudio-ui`](https://github.com/uStudioCompany/ustudio-ui) – our first attempt at creating a UI library for React.
`ustudio-ui` generally met our requirements yet leaving much room for improvement.
Here we made an attemt to completely rewrite the first version of our library, redesigning components and rethinking
all the code and architecture in the process.

Brix UI was made in the country of Ukraine by these lovely members and ex-members
of the [uStudio](https://github.com/uStudioCompany) company:

<div>
    <div>
        <a href="https://github.com/mrrotberry" target="_blank">
            <img src="https://avatars1.githubusercontent.com/u/29091197?s=460&u=97519abf2b9d620bd4d534a5c843dc1910efcbbf&v=4" width="32" />
            <strong>Dmytro Volkov</strong>
        </a>
    </div>
    <div>
        <a href="https://github.com/annisokay97" target="_blank">
            <img src="https://avatars3.githubusercontent.com/u/23137619?s=460&v=4" width="32" />
            <strong>Hanna Mekshun</strong>
        </a>
    </div>
    <div>
        <a href="https://github.com/drizzer14" target="_blank">
            <img src="https://avatars0.githubusercontent.com/u/1790097?s=460&u=b8a51c672422bb0e3b2b922be3bb87bbd197d1fa&v=4" width="32" />
            <strong>Dmytro Vasylkivskyi</strong>
        </a>
    </div> 
   <div>
        <a href="https://github.com/natalia-lypovyk" target="_blank">
            <img src="https://avatars1.githubusercontent.com/u/58652925?s=460&v=4" width="32" />
            <strong>Nataliia Lypovyk</strong>
        </a>
    </div>   
    <div>
        <a href="https://github.com/semenov-ol" target="_blank">
            <img src="https://avatars3.githubusercontent.com/u/56276169?s=460&v=4" width="32" />
            <strong>Oleh Semenov</strong>
        </a>
    </div>
</div>
