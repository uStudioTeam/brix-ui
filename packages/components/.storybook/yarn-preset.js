const { resolve } = require('path');
const PnpWebpackPlugin = require(`pnp-webpack-plugin`);

const tsconfig = require('../../../tsconfig.json');
const { paths } = tsconfig.compilerOptions;

async function yarn2Config(config = {}) {
  const configModule = config.module || {};
  const configResolve = config.resolve || {};
  const configResolveLoader = config.resolveLoader || {};

  const newConfig = {
    ...config,
    module: {
      ...configModule,
      rules: [
        ...(configModule.rules || []),
        {
          test: /\.(ts|tsx)$/,
          loader: require.resolve('babel-loader'),
          options: {
            presets: [['react-app', { flow: false, typescript: true }]],
          },
        },
      ],
    },
    resolve: {
      ...configResolve,
      plugins: [...(configResolve.plugins || []), PnpWebpackPlugin],
      extensions: [...(configResolve.extensions || []), '.ts', '.tsx'],
      modules: [resolve(__dirname, '../src'), 'node_modules'],
      alias: {
        ...(configResolve.alias || {}),
        ...Object.keys(paths).reduce((aliases, path) => {
          return Object.assign(aliases, {
            [path.slice(0, -2)]: resolve(__dirname, `../../../${paths[path][0].slice(2, -2)}`),
          });
        }, {}),
      },
    },
    resolveLoader: {
      ...configResolveLoader,
      plugins: [...(configResolveLoader.plugins || []), PnpWebpackPlugin.moduleLoader(module)],
    },
  };

  const jsRule = newConfig.module.rules.find((rule) => rule.test.test('.js'));
  jsRule.exclude = /node_modules/;

  return newConfig;
}

module.exports = { managerWebpack: yarn2Config, webpack: yarn2Config };
