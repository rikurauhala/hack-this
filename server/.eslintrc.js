module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true
        }
      }
    ],
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/semi': ['error'],
    'eol-last': ['error', 'always'],
    'indent': ['error', 2, { SwitchCase: 1 }],
    'max-len': ['error', { code: 120, tabWidth: 2 }],
    'no-case-declarations': 'off',
    'no-control-regex': 'off',
    'no-multi-spaces': 'error',
    'no-trailing-spaces': 'error',
    'no-useless-escape': 'off',
    'quotes': ['error', 'single', { allowTemplateLiterals: true }],
  },
  ignorePatterns: ['build', 'web'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
