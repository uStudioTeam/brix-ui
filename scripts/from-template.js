const { writeFileSync, readdirSync, readFileSync, mkdirSync } = require('fs');
const { resolve } = require('path');

const packagesPath = resolve(__dirname, '../packages');

module.exports = (file, factory) => {
  let templateName, templateContent;

  if (typeof file === 'string') {
    templateName = file;
    templateContent = readFileSync(resolve(__dirname, `../${file}`));
  }

  readdirSync(packagesPath).forEach((directory) => {
    const directoryPath = resolve(packagesPath, directory);
    const libPath = resolve(directoryPath, 'lib');

    if (typeof file === 'function') {
      const template = file(directoryPath);
      templateName = template[0];
      templateContent = template[1];
    }

    mkdirSync(libPath, { recursive: true });
    writeFileSync(resolve(libPath, templateName), factory(directoryPath, templateContent));
  });
};
