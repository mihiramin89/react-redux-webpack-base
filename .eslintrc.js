module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'settings': {
    'import/resolver': 'webpack',
  },
  'rules': {
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
    'no-console': [0, { allow: ['warn', 'error'] }],
    'no-nested-ternary' : 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-no-bind': [0, { 'allowBind': true }],
    'react/prefer-stateless-function': 0
  },
};
