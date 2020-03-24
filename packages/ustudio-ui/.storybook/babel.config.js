module.exports = {
  presets: ['@babel/env', '@babel/react'],
  plugins: [
    [
      'styled-components',
      {
        ssr: true,
        displayName: true,
        fileName: false,
        minify: false,
        pure: false,
        transpileTemplateLiterals: false,
      },
    ],
    '@babel/proposal-class-properties',
    '@babel/proposal-optional-chaining',
    '@babel/proposal-nullish-coalescing-operator',
    '@babel/proposal-object-rest-spread',
    'inline-react-svg'
  ],
  exclude: ['../src/assets'],
  ignore: ['../src/**/stories'],
};
