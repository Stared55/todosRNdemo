module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-debugger': 'error',
    'comma-dangle': 0,
    'no-unused-vars': 0,
    'no-undef': 0,
    quotes: 1,
    semi: 'off',
    '@typescript-eslint/semi': ['error'],
    'react/no-unescaped-entities': 0,
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react-native/no-raw-text': 0,
    'space-before-function-paren': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-var-requires': 0,
    'react-native/no-inline-styles': 0,
    'react-hooks/exhaustive-deps': 0,
    'eslint-comments/no-unlimited-disable': 0,
  },
};
