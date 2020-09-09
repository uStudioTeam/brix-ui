const { resolve } = require('path');
const fromTemplate = require('./from-template');

const fileName = 'tsconfig.json';

module.exports = () => {
  fromTemplate(
    () => {
      return [fileName, require(resolve(__dirname, `../${fileName}`))];
    },
    (directoryPath, template) => {
      const {
        paths: _paths,
        types: _types,
        rootDir: _rootDir,
        baseUrl: _baseUrl,
        ...compilerOptions
      } = template.compilerOptions;

      return JSON.stringify(
        {
          compilerOptions,
        },
        null,
        2
      );
    }
  );
};
