const styledComponentsConfig = ['styled-components', { displayName: true, preprocess: false }];
const reactConfig = '@babel/preset-react';
const inlineSvgConfig = 'babel-plugin-inline-react-svg';

const withConfig = (shouldUse, config) => (shouldUse ? [config] : []);

const babelConfig = ({ styledComponents, react, inlineSvg }) => ({
  presets: [...withConfig(react, reactConfig), '@babel/preset-typescript'],
  plugins: [...withConfig(styledComponents, styledComponentsConfig), ...withConfig(inlineSvg, inlineSvgConfig)],
});

module.exports = babelConfig;
