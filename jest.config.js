module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'ts',
    'tsx'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'e2e/api-tests/nodegen/services/*.{js,ts}',
  ],
  coverageDirectory: 'coverage',

  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '/build/'
  ],

  testPathIgnorePatterns: [
    '/node_modules/',
    '/build/',
  ],

  testEnvironment: 'node',

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },

  setupFilesAfterEnv: ['./jest.setup.js'],

  testURL: 'http://localhost/'
}
