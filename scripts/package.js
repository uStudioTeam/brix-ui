const fromTemplate = require('./from-template');

const fileName = 'package.json';

const meta = {
  author: 'uStudio Company <toberead@ustudio.company> (http://ustudio.company)',
  repository: 'github:uStudioCompany/ustudio-ui',
  homepage: 'https://github.com/uStudioCompany/ustudio-ui/blob/master/README.md',
  license: 'MIT',
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
    };
  },
  fileName
);
