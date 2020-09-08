const fromTemplate = require('./from-template');

const fileName = 'package.json';

fromTemplate(
  fileName,
  ({ scripts: _s, ...template }) => {
    return {
      ...template,
    };
  },
  fileName
);
