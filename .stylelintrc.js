module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-styled-components'],
  processors: ['stylelint-processor-styled-components'],
  rules: {
    'declaration-empty-line-before': 'off',
    'selector-pseudo-element-colon-notation': 'off',
    'value-keyword-case': 'off',
  },
};
