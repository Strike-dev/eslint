module.exports = {
  "plugins": ["import"],
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "import-quotes"
	],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".d.ts",
        ]
      }
    }
  },
  "rules": {
    // "camelcase": 2,
    // "prefer-destructuring": 2,
    // "no-nested-ternary": 2,
    // "comma-dangle": 0,
    // "@typescript-eslint/ban-ts-comment": 2,
    // "@typescript-eslint/no-explicit-any": 2,
    // "@typescript-eslint/explicit-module-boundary-types": 0,
    // "@typescript-eslint/indent": 0,
    // "@typescript-eslint/no-unused-vars": 0,
    // "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }],
    // "react-hooks/rules-of-hooks": 2,
    // "react-hooks/exhaustive-deps": ["error"],
    "import-quotes/import-quotes": [1, "single"],
    "import/no-extraneous-dependencies": 2,
    "import/extensions": ["error", "never", { "svg": "always" }],
    "import/order": ["error", {"newlines-between": "always"}],
    "import/no-duplicates": 2,
    "import/no-useless-path-segments": 2,
    "import/prefer-default-export": 0,
    "import/named": 0,
    "import/namespace": 0,
    "import/default": 0,
    "import/no-named-as-default-member": 0,
    "import/no-named-as-default": 0,
    "import/no-unused-modules": 0,
    "import/no-deprecated": 0,
    "import/no-anonymous-default-export": 2,
    // "jest/no-identical-title": 2,
    // "jest/valid-expect": 2,
  }
};