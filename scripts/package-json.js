const { resolve } = require('path');
const fromTemplate = require('./from-template');

const meta = {
  author: 'uStudio Company <toberead@ustudio.company> (http://ustudio.company)',
  repository: 'github:uStudioCompany/ustudio-ui',
  homepage: 'https://github.com/uStudioCompany/ustudio-ui/blob/master/README.md',
  license: 'MIT',
};

const engineInfo = {
  browserslist: {
    production: ['edge >= 14', 'firefox >= 52', 'chrome >= 49', 'safari >= 10'],
    development: ['last 1 chrome version', 'last 1 firefox version', 'last 1 safari version'],
    ssr: ['node >= 12'],
  },
  engines: {
    node: '>=12',
  },
};

module.exports = () => {
  fromTemplate(
    (directoryPath) => {
      const templateName = 'package.json';

      return [templateName, require(resolve(directoryPath, templateName))];
    },
    (_, { scripts: _s, name, version, keywords = [], ...packageJson }) => {
      return JSON.stringify(
        {
          name,
          version,
          ...meta,
          keywords: ['react', 'typescript', ...keywords],
          ...packageJson,
          ...engineInfo,
          publishConfig: {
            access: 'public',
          },
        },
        null,
        2
      );
    }
  );
};
