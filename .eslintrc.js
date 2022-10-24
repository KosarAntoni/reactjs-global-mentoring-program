module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', 'simple-import-sort'],
  rules: {
    'no-console': 1,
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [`^(${require('module').builtinModules.join('|')})(/|$)`, '^react', '^gatsby', '^@?\\w'],
          ['^atoms(/.*|$)', '^molecules(/.*|$)', '^organisms(/.*|$)', '^templates(/.*|$)'],
          ['^utils(/.*|$)', '^hooks(/.*|$)'],
          ['^\\.'],
          ['^types(/.*|$)', 'models(.*|$)']
        ]
      }
    ]
  }
}
