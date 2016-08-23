module.exports = {
  env: {
    browser: true,
  },
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: [
    'react',
    'react-native',
  ],
  rules: {
    eqeqeq: ['error', 'smart'],
    'react/jsx-filename-extension': [0],
    'react/jsx-boolean-value': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ios.js', '.android.js']
      }
    }
  },
};
