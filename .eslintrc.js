module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: ["airbnb-base", "plugin:@typescript-eslint/recommended"],
    rules: {
      "prettier/prettier": "error",
    },
  };
  