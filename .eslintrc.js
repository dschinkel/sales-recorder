module.exports = {
  root: true,
  extends: ['@react-native', 'airbnb', 'airbnb/hooks', 'prettier'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
    'no-use-before-define': 'off',
    'react/function-component-definition': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/no-array-index-key': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'react/destructuring-assignment': 'off',
  },
};
