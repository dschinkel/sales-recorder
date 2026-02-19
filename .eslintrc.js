module.exports = {
  root: true,
  extends: ['@react-native', 'airbnb', 'airbnb/hooks', 'prettier'],
  plugins: ['sonarjs'],
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

    // Ensures components have a readable name when wrapped with memo, forwardRef, HOCs.
    'react/display-name': 'warn',
    // Functional components over class components
    'react/prefer-stateless-function': 'warn',
    // Warns when effect dependencies are incorrect / prevents stale closures / prevents ghost state bugs
    'react-hooks/exhaustive-deps': 'warn',
  },

  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        // keep funcions composible, well named, and small
        'max-lines-per-function': [
          'error',
          {
            max: 20,
            skipBlankLines: true,
            skipComments: true,
            IIFEs: true,
          },
        ],
        complexity: ['error', 12],
        'max-depth': ['error', 4],
        // forces prop grouping / domain modeling
        'max-params': ['error', 3],
        // Limits inline callbacks inside JSX
        'max-nested-callbacks': ['error', 0],
        // reveals “god components” and encourages feature slicing
        'import/max-dependencies': ['error', { max: 20 }],
        // Measures readability complexity rather than branching count / aligns with how humans read code
        'sonarjs/cognitive-complexity': ['error', 15],
        // God-object guardrails
        'max-lines': ['error', { max: 200, skipBlankLines: true, skipComments: true }],
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
        // keep react components composed, well named, and small
        'max-lines-per-function': [
          'error',
          {
            max: 50,
            skipBlankLines: true,
            skipComments: true,
            IIFEs: true,
          },
        ],
        // limits how many components exist per file
        'react/no-multi-comp': [
          'error',
          {
            ignoreStateless: true,
          },
        ],
        // Blocks defining components inside other components’ render functions
        'react/no-unstable-nested-components': [
          'error',
          {
            allowAsProps: true,
          },
        ],
        // Ensures keys exist in mapped lists.
        'react/jsx-key': 'error',
        // Enforces when to use {} vs literal strings
        'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
        // Enforces <Component /> when there are no children to reduce visual noise
        'react/self-closing-comp': 'error',
        // Prevents {...props} unless explicitly allowed.  When spreads are used it hides contract surface and can accidentally pass unwanted props to DOM/native components
        'react/jsx-props-no-spreading': 'warn',
        // Prevents unnecessary <> </> wrappers
        'react/jsx-no-useless-fragment': 'error',
      },
    },
  ],
};
