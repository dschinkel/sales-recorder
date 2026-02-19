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
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/no-array-index-key': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'react/destructuring-assignment': 'off',
  },

  overrides: [
    {
      files: ['**/*.ts'],
      rules: {
        'max-lines-per-function': [
          'error',
          {
            max: 60,
            skipBlankLines: true,
            skipComments: true,
            IIFEs: true,
          },
        ],
        complexity: ['error', 12],
        'max-depth': ['error', 4],
      },
    },
    {
      files: ['**/*.tsx'],
      rules: {
        'react/function-component-definition': [
          'error',
          {
            namedComponents: 'function-declaration',
            unnamedComponents: 'arrow-function',
          },
        ],
        'max-lines-per-function': [
          'error',
          {
            max: 120,
            skipBlankLines: true,
            skipComments: true,
            IIFEs: true,
          },
        ],
        complexity: ['error', 12],
        'max-depth': ['error', 4],
      },
    },
  ],
};
