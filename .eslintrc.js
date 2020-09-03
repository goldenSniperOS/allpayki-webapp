module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    camelcase: 'off', // python response object dont use camelcase
    'react/jsx-filename-extension': 'off',
    'import/no-extraneous-dependencies': 'off', // because of how we import fontawesome
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/interactive-supports-focus': 'off', // really useful, but an overkill right now
    'jsx-a11y/click-events-have-key-events': 'off', // really useful, but an overkill right now
    'jsx-a11y/mouse-events-have-key-events': 'off', // really useful, but an overkill right now
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
