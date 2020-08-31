const styledComponentsConfig = ['styled-components', { displayName: true, preprocess: false }];
const reactConfig = '@babel/preset-react';
const inlineSvgConfig = 'react-svg';
const polishedConfig = 'polished';

const withConfig = (shouldUse, config) => (shouldUse ? [config] : []);

const babelConfig = ({ styledComponents, react, inlineSvg, polished }) => ({
  presets: [...withConfig(react, reactConfig), '@babel/preset-typescript'],
  plugins: [
    ...withConfig(styledComponents, styledComponentsConfig),
    ...withConfig(inlineSvg, inlineSvgConfig),
    ...withConfig(polished, polishedConfig),
  ],
});

module.exports = babelConfig;
