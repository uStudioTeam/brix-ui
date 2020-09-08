const fromTemplate = require('./from-template');

const fileName = 'package.json';

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

fromTemplate(
  fileName,
  ({ scripts: _s, name, version, keywords = [], ...template }) => {
    return {
      name,
      version,
      ...meta,
      keywords: ['react', 'typescript', ...keywords],
      ...template,
      ...engineInfo,
    };
  },
  fileName
);
