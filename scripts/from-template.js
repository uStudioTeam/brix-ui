const { writeFileSync, mkdirSync } = require('fs');
const { resolve } = require('path');

const dirName = 'lib';

module.exports = (templatePath, factory, fileName) => {
  const template = require(resolve(process.cwd(), templatePath));

  const tsconfig = factory(template);

  mkdirSync(`./${dirName}`, { recursive: true });
  writeFileSync(`./${dirName}/${fileName}`, JSON.stringify(tsconfig, null, 2));
};
