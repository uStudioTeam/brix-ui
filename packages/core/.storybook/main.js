const { resolve } = require('path');

module.exports = {
  stories: ['./stories/*.story.tsx'],
  addons: ['@storybook/addon-knobs/register', 'storybook-addon-jsx'],
  presets: [resolve('./.storybook/yarn-preset')],
  /* webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });

    const jsRule = config.module.rules.find((rule) => rule.test.test('.js'));
    jsRule.exclude = /node_modules/;

    config.resolve.extensions.push('.ts', '.tsx');

    config.resolve.modules = [resolve(__dirname, '../src'), 'node_modules'];

    config.resolve.plugins.push(PnpWebpackPlugin);
    config.resolveLoader.plugins.push(PnpWebpackPlugin.moduleLoader(module));

    Object.assign(
      config.resolve.alias,
      Object.keys(paths).reduce((aliases, path) => {
        return Object.assign(aliases, {
          [path.slice(0, -2)]: resolve(__dirname, `../../../${paths[path][0].slice(2, -2)}`),
        });
      }, {})
    );

    return config;
  }, */
};
