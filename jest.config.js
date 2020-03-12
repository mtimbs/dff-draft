module.exports = {
  setupFiles: [],
  transform: {
    '^.+\\.ts?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^@factories/(.*)$': '<rootDir>/src/factories/$1',
  },
};
