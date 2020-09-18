const pathsToWebpackAlias = require('../scripts/paths-to-webpack-alias');

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
    'storybook-addon-jsx',
  ],
  webpackFinal: async (config) => {
    config.module.rules.find((rule) => rule.test.test('.svg')).exclude = /\.inline.svg$/;

    config.module.rules.push(
      {
        test: /\.(ts|tsx|jsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
        },
      },
      {
        test: /\.inline.svg$/,
        loader: require.resolve('@svgr/webpack'),
      }
    );

    config.resolve.extensions.push('.ts', '.tsx', '.jsx');

    config.resolve.modules = ['node_modules'];

    Object.assign(config.resolve.alias, pathsToWebpackAlias());

    return config;
  },
};
