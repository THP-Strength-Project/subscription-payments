module.exports = {
  root: true,
  env: {
    "browser": true,
    "node": true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:@next/next/recommended', 'prettier'],
  rules: {
    'no-unsafe-optional-chaining': 'off'
  }
}
