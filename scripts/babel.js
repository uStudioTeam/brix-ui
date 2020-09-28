const presets = {
  env: '@babel/preset-env',
  react: '@babel/preset-react',
};

const plugins = {
  styledComponents: ['styled-components', { displayName: true, preprocess: false }],
  polished: 'polished',
  runtime: '@babel/plugin-transform-runtime',
  classProperties: '@babel/plugin-proposal-class-properties',
};

const withConfig = (shouldUse, config) => (shouldUse ? [config] : []);

const applyConfigs = (object, options) => {
  return Object.keys(object).reduce((configs, key) => {
    return [...configs, ...withConfig(options[key], object[key])];
  }, []);
};

module.exports = (options = {}) => {
  const { styledComponents = true, react = true, env = true, polished = true, runtime, classProperties } = options;

  return {
    presets: [...applyConfigs(presets, { react, env }), '@babel/preset-typescript'],
    plugins: applyConfigs(plugins, { styledComponents, polished, runtime, classProperties }),
    ignore: ['src/**/*.d.ts'],
  };
};
