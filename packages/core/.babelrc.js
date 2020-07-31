module.exports = {
  presets: ['@babel/preset-react', '@babel/preset-typescript'],
  plugins: [['styled-components', { displayName: true, preprocess: false }]],
};
