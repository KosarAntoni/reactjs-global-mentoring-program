module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.scss$': 'jest-scss-transform',
    '^.+\\.[t|j]sx?$': 'babel-jest'
  },
  snapshotResolver: '<rootDir>/src/utilities/snapshotResolver.js'
}
