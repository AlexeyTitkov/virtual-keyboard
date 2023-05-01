module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "linebreak-style":  ["error", "windows"],
    "import/prefer-default-export": "off",
    "prefer-destructuring": ["error", {"object": true, "array": false}],
    "no-use-before-define": ["error", {"functions": false, "classes": false}],
    "import/extensions": [
      "error",
      {
        "js": "ignorePackages"
      }
    ],
  },
};
