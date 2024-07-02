module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testRegex: '\\.test\\.(ts|tsx)$',
    moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  };