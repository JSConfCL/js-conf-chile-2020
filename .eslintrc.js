module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard",
    "prettier",
    "prettier/react",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    strict: 0,
    "prettier/prettier": ["error"],
  },
};
