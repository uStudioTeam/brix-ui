module.exports = {
  ...require('./scripts/babel')({
    runtime: true,
  }),
  babelrcRoots: ['.', 'packages/{contexts,core,fonts,grid,hooks,icons,prop-types,theme,types,utils}'],
};
