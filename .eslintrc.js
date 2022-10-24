module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript"],
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react"],
  rules: {},
  // overrides: [
  //   {
  //     files: ["*.js", "*.jsx"],
  //     rules: {
  //       quotes: [0, "single"],
  //       "comma-dangle": [0, "never"],
  //       semi: [0],
  //     },
  //   },
  // ],
};
