module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard",
    "prettier",
    "prettier/react",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
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
    "prettier/prettier": ["error"],
  },
};
