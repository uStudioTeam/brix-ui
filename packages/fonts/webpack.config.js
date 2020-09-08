const { resolve } = require('path');
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
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
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
    extensions: ['.ts'],
    alias: pathsToWebpackAlias(),
  },
};
