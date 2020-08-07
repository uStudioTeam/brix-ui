const styledComponentsConfig = ['styled-components', { displayName: true, preprocess: false }];
const reactConfig = '@babel/preset-react';

const withConfig = (shouldUse, config) => (shouldUse ? [config] : []);

const babelConfig = ({ styledComponents, react }) => ({
  presets: [withConfig(react, reactConfig), '@babel/preset-typescript'],
  plugins: [...withConfig(styledComponents, styledComponentsConfig)],
});

module.exports = babelConfig;
