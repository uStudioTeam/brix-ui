const { resolve } = require('path');

const tsconfig = require('../tsconfig.json');

const {
  compilerOptions: { paths },
} = tsconfig;

module.exports = {
  stories: ['../packages/**/*.story.tsx'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        baskgrounds: false,
        actions: false,
      },
    },
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx|jsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });

    config.resolve.extensions.push('.ts', '.tsx', '.jsx');

    config.resolve.modules = ['node_modules'];

    Object.assign(
      config.resolve.alias,
      Object.keys(paths).reduce((aliases, path) => {
        return Object.assign(aliases, {
          [path.slice(0, -2)]: resolve(__dirname, `../${paths[path][0].slice(2, -2)}`),
        });
      }, {})
    );

    return config;
  },
};
