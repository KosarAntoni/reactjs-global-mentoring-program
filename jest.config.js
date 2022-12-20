module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.scss$': 'jest-scss-transform',
    '^.+\\.[t|j]sx?$': 'babel-jest'
  },
  snapshotResolver: '<rootDir>/src/utilities/snapshotResolver.js',
  moduleNameMapper: {
    'components/(.*)': '<rootDir>/src/components/$1',
    'containers/(.*)': '<rootDir>/src/containers/$1',
    'utilities/(.*)': '<rootDir>/src/utilities/$1',
    utilities: '<rootDir>/src/utilities',
    'consts/(.*)': '<rootDir>/src/consts/$1',
    consts: '<rootDir>/src/consts',
    'store/(.*)': '<rootDir>/src/store/$1',
    store: '<rootDir>/src/store'
  }
}
