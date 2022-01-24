module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true, // https://stackoverflow.com/questions/49789177/module-is-not-defined-and-process-is-not-defined-in-eslint-in-visual-studio-code
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/no-var-requires': 'off', // https://stackoverflow.com/questions/59278151/eslint-require-statement-not-part-of-import-statement-typescript-eslint-no-va
  },
  settings: {
    react: {
      pragma: 'h',
    },
  },
};
