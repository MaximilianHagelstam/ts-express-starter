module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "no-shadow": "warn",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-function-return-type": "off",

    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/no-object-literal-type-assertion": "off",
  },
};
