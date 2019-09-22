module.exports = {
  collectCoverage: true,
  coverageDirectory: './jest',
  collectCoverageFrom: [
    "./src/nodegen/services/*.ts",
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'ts',
    'tsx'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
  testURL: 'http://localhost/',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '/build/*'
  ],
  verbose: true,
}
