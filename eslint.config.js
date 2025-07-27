import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      react: react,
      "react-hooks": reactHooks,
      import: importPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    // extends removed for flat config compatibility
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      "arrow-body-style": ["error"],
      "consistent-return": ["error", { treatUndefinedAsUnspecified: false }],
      eqeqeq: ["error", "smart"],
      "new-cap": "error",
      "no-console": "warn",
      "no-constant-condition": ["error", { checkLoops: false }],
      "no-labels": "error",
      "no-extra-semi": "off",
      "no-mixed-spaces-and-tabs": "off",
      "no-unexpected-multiline": "off",
      "no-unneeded-ternary": ["error", { defaultAssignment: false }],
      "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
      "no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
          enforceForJSX: true,
        },
      ],
      "import/order": [
        "error",
        {
          "newlines-between": "always",
          groups: [
            ["builtin", "external"],
            ["internal", "parent"],
            ["sibling", "index"],
            ["object"],
          ],
        },
      ],
      "import/no-cycle": ["error", { maxDepth: 1 }],
      "import/no-unresolved": [2],
      "react/no-unstable-nested-components": ["error", { allowAsProps: true }],
      "react/function-component-definition": [
        "error",
        {
          namedComponents: ["arrow-function"],
          unnamedComponents: ["arrow-function"],
        },
      ],
      "react/prop-types": ["error", { ignore: ["children"] }],
      "react/react-in-jsx-scope": "off"
    },
  },
]);
