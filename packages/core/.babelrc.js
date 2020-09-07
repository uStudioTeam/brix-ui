module.exports = {
  ...require('../../babel')({ styledComponents: true, react: true, inlineSvg: true }),
  ignore: ['src/**/*.d.ts'],
};
