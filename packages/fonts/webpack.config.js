const { resolve } = require('path');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

const pathsToWebpackAlias = require('../../scripts/paths-to-webpack-alias');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: resolve(__dirname, 'lib'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
        options: {
          useBabel: true,
          babelCore: '@babel/core',
          configFileName: 'tsconfig.build.json',
        },
      },
      {
        test: /\.ttf$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
    alias: pathsToWebpackAlias(),
  },
  plugins: [new HardSourceWebpackPlugin()],
};
