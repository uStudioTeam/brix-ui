const tsconfig = require('./tsconfig.json');
// eslint-disable-next-line import/order
const moduleNameMapper = require('tsconfig-paths-jest')(tsconfig);

const { paths } = tsconfig.compilerOptions;

module.exports = {
  testEnvironment: 'jsdom',
  rootDir: './',
  roots: Object.values(paths)
    .flatMap(([path]) => path.replace(/\/\*/, ''))
    .filter((path) => !/index.ts$/.test(path)),
  preset: 'ts-jest/presets/js-with-babel',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
      babelConfig: '<rootDir>/babel.config.js',
    },
  },
  transformIgnorePatterns: ['node_modules/(?!(honks)/)'],
  testRegex: '.*\\.spec.tsx?$',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -250,
    },
  },
  collectCoverageFrom: ['**/*.ts', '**/*.tsx'],
  clearMocks: true,
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleDirectories: ['node_modules', '**/node_modules', '**/src'],
  moduleNameMapper: {
    ...moduleNameMapper,
    '\\.(svg)$': '<rootDir>/mocks/empty-module.js',
  },
  testPathIgnorePatterns: ['<rootDir>/lib/', '<rootDir>/node_modules/'],
};
