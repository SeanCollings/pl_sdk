module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    curly: 'warn',
    'no-restricted-imports': [
      'warn',
      {
        patterns: ['.*'],
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
  },
  overrides: [
    {
      files: ['*.test.*'],
      rules: {
        'no-restricted-imports': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
