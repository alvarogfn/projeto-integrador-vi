/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "vue/script-indent": ["warn", 2, { baseIndent: 1 }],
    "vue/component-name-in-template-casing": ["error", "kebab-case"],
    "vue/component-options-name-casing": ["error", "kebab-case"],
    "vue/custom-event-name-casing": ["error", "kebab-case"],
    "vue/define-emits-declaration": ["error", "type-based"],
    "vue/define-props-declaration": ["error", "type-based"],
    "vue/component-api-style": ["error", ["script-setup"]],
    "vue/no-required-prop-with-default": ["error", { autofix: false }],
    "linebreak-style": "off",
  },
};
