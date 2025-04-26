// @ts-check

const ERROR = 'error';

/** @type {import("eslint").Linter.Config} */
module.exports = {
  rules: {
    '@typescript-eslint/no-unused-vars': [ERROR, { ignoreRestSiblings: false, args: 'after-used', vars: 'all' }],
    '@typescript-eslint/consistent-type-imports': [ERROR, { fixStyle: 'separate-type-imports' }],
    'import/no-extraneous-dependencies': [ERROR, { devDependencies: false }],
    'import/consistent-type-specifier-style': [ERROR, 'prefer-top-level'],
    '@typescript-eslint/no-unsafe-declaration-merging': ERROR,
    'unused-imports/no-unused-imports': ERROR,

    'import/no-duplicates': ERROR,
    'no-unreachable': ERROR,
    'require-await': ERROR,
    'import/first': ERROR,
    'no-eval': ERROR
  },
  extends: [
    'plugin:promise/recommended',
    'plugin:perfectionist/recommended-alphabetical',
    'plugin:perfectionist/recommended-natural',
    'plugin:perfectionist/recommended-line-length'
  ],

  plugins: ['@typescript-eslint', 'import', 'unused-imports', 'only-error', 'perfectionist'],

  parser: '@typescript-eslint/parser'
};
