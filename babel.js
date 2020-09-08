const presets = {
  env: '@babel/preset-env',
  react: '@babel/preset-react',
};

const plugins = {
  styledComponents: ['styled-components', { displayName: true, preprocess: false }],
  polished: 'polished',
  inlineSvg: 'inline-react-svg',
  runtime: '@babel/plugin-transform-runtime',
  classProperties: '@babel/plugin-proposal-class-properties',
};

const withConfig = (shouldUse, config) => (shouldUse ? [config] : []);

const applyConfigs = (object, options) => {
  return Object.keys(object).reduce((configs, key) => {
    return [...configs, ...withConfig(options[key], object[key])];
  }, []);
};

const babelConfig = (options = {}) => {
  const {
    styledComponents = true,
    react = true,
    env = true,
    inlineSvg,
    polished = true,
    runtime,
    classProperties,
  } = options;

  return {
    presets: [...applyConfigs(presets, { react, env }), '@babel/preset-typescript'],
    plugins: applyConfigs(plugins, { styledComponents, inlineSvg, polished, runtime, classProperties }),
    ignore: ['src/**/*.d.ts'],
  };
};

module.exports = babelConfig;
