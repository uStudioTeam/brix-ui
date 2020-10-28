const fromTemplate = require('./from-template');

module.exports = () => {
  fromTemplate('LICENSE', (_, license) => license);
};
