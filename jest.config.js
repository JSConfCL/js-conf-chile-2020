module.exports = {
  verbose: true,
  moduleNameMapper: {
    testEnvironment: 'node',
    '\\.(css|scss)$': "<rootDir>/mock/style.mock.js",
    '@components/(.*)$': '<rootDir>/components/$1',
    '@helpers/(.*)$': '<rootDir>/helpers/$1',
    '@styles/(.*)$': '<rootDir>/styles/$1',
  },
};

