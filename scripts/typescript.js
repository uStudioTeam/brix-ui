const { resolve } = require('path');
const fromTemplate = require('./from-template');

const fileName = 'tsconfig.json';
const { compilerOptions = {}, extends: _e, paths: _p, ...local } = require(resolve(process.cwd(), fileName));

fromTemplate(
  `../../${fileName}`,
  (template) => {
    return {
      ...local,
      compilerOptions: {
        ...template.compilerOptions,
        ...compilerOptions,
      },
    };
  },
  fileName
);
