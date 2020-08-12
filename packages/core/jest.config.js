const tsconfig = require('../../tsconfig.json');
const { paths } = tsconfig.compilerOptions;

const moduleNameMapper = require('tsconfig-paths-jest')(tsconfig);

module.exports = {
  testEnvironment: 'jsdom',
  rootDir: '../../',
  roots: Object.values(paths)
    .flatMap(([path]) => path.replace(/\/\*/, ''))
    .filter((path) => !/index.ts$/.test(path)),
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
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
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx'],
  clearMocks: true,
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper,
  testPathIgnorePatterns: ['<rootDir>/lib/', '<rootDir>/node_modules/'],
};
