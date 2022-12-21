module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:react-hooks/recommended'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', 'simple-import-sort'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/prefer-nullish-coalescing': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/indent': 0,
    'jsx-quotes': [2, 'prefer-single'],
    'no-console': 1,
    'react/jsx-newline': [2, { prevent: true, allowMultilines: true }],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-one-expression-per-line': [2, { allow: 'literal' }],
    'react/jsx-indent': [2, 2],
    'react/jsx-closing-tag-location': 2,
    'react/jsx-wrap-multilines': [2, {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line'
    }],
    'react/jsx-sort-props': 2,
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [`^(${require('module').builtinModules.join('|')})(/|$)`, '^react', '^gatsby', '^@?\\w'],
          ['^components(/.*|$)', '^containers(/.*|$)', '^templates(/.*|$)'],
          ['^utils(/.*|$)', '^hooks(/.*|$)'],
          ['^\\.'],
          ['^types(/.*|$)', 'models(.*|$)'],
          ['^styles(/.*|$)']
        ]
      }
    ]
  },
  ignorePatterns: ['node_modules', 'cypress', 'cypress.config.ts']
}
