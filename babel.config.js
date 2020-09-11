module.exports = {
  ...require('./scripts/babel')({
    inlineSvg: true,
    runtime: true,
  }),
  babelrcRoots: ['.', 'packages/{contexts,core,grid,prop-types,theme,types,utils}'],
};
