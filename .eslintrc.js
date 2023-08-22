module.exports = {
  root: true,
  extends: ['@react-native/eslint-config'],

  plugins: ['import', 'simple-import-sort', 'jest'],
  env: {
    'jest/globals': true,
  },
  rules: {
    'react-native/no-inline-styles': 0,
    'no-use-before-define': 'off',

    'no-underscore-dangle': [2, { allowAfterThis: true }],
    'prettier/prettier': ['error'],
    'import/no-cycle': 'off',
    'import/extensions': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],

    'react/no-did-update-set-state': 'off',
    'react/prefer-stateless-function': 0,

    'no-unused-expressions': 'off',

    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'ignore',
        prop: 'ignore',
      },
    ],
    'class-methods-use-this': 0,
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [
            // Packages. `react` related packages come first.
            '^react',
            '^react-native',
            '^@?\\w',
            // Side effect imports.
            '^\\u0000',
            // Internal packages.
            '^(@)/(..|App|components|constants|hooks|navigators|screens|store|utils|types|styles|i18n)(/.*|$)',
            // Internal packages.
            '^(fonts|images|styles)(/.*|$)',
            // Style imports.
            '^.+\\.s?css$',
            // Parent imports. Put `..` last.
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            // Other relative imports. Put same-folder imports and `.` last.
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
          ],
        ],
      },
    ],
    'sort-imports': 'off',
    'import/order': 'off',
  },
};
