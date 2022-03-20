module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    "next",
    "plugin:react/recommended",
    "standard",
    "plugin:prettier/recommended",
    "prettier",
    "plugin:import/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      alias: {
        map: [
          ["@components", "./components"],
          ["@helpers", "./helpers"],
          ["@styles", "./styles"],
        ],
      },
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
    requireConfigFile: false,
  },
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    "prettier/prettier": ["error"],
  },
};
