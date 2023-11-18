/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  env: {
    "browser": true,
    "node": true,
    "es2024": true
  },
  root: true,
  extends: [
    'eslint:recommended'
  ],
  rules: {
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
