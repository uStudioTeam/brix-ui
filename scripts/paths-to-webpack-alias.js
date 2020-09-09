const { resolve } = require('path');
const {
  compilerOptions: { paths },
} = require('../tsconfig.json');

module.exports = () => {
  return Object.keys(paths)
    .filter((path) => path.indexOf('*') !== -1)
    .reduce((aliases, path) => {
      return Object.assign(aliases, {
        [path.slice(0, -2)]: resolve(__dirname, `../${paths[path][0].slice(0, -2)}`),
      });
    }, {});
};
