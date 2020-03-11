const path = require('path');
const fs = require('fs');

require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  env: {
    BASE_URL: isProduction ? process.env.BASE_URL || '' : '',
  },
  assetPrefix: isProduction ? process.env.BASE_URL || '' : '',
  webpack: config => {
    config.module.rules.push(
      ...[
        {
          test: /\.md$/,
          use: 'raw-loader',
        },
        {
          test: [/\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
          loader: require.resolve('file-loader'),
          options: {
            name: 'assets/[name].[hash:8].[ext]',
          },
        },
      ]
    );

    config.resolve.alias['@ustudio/ui'] = path.resolve(__dirname, '../ui/lib');

    return config;
  },
  exportPathMap: () => {
    const pagesPath = path.join(__dirname, 'pages');

    const prependPathSegment = pathSegment => location => path.join(pathSegment, location);

    const readdirPreserveRelativePath = location => fs.readdirSync(location).map(prependPathSegment(location));

    // @TODO need refactoring!
    const readdirRecursive = location =>
      readdirPreserveRelativePath(location).reduce((result, currentValue) => {
        if (fs.statSync(currentValue).isDirectory()) {
          return { ...result, ...readdirRecursive(currentValue) };
        }

        if (/_/.test(currentValue)) {
          return result;
        }

        // eslint-disable-next-line no-param-reassign
        currentValue = currentValue
          .replace(/^.*\/pages/, '')
          .replace('.tsx', '')
          .replace('index', '');

        if (currentValue.length > 1 && /\/$/.test(currentValue)) {
          // eslint-disable-next-line no-param-reassign
          currentValue = currentValue.replace(/\/$/, '');
        }

        // eslint-disable-next-line no-param-reassign
        result[currentValue] = { page: currentValue };
        return result;
      }, {});

    return readdirRecursive(pagesPath);
  },
};
