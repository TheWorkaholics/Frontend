import pluginJs from "@eslint/js";
import pluginImport from "eslint-plugin-import";
import pluginPrettier from "eslint-plugin-prettier";
import pluginReact from "eslint-plugin-react";
import pluginReactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      "react-refresh": pluginReactRefresh,
      import: pluginImport,
      prettier: pluginPrettier,
    },
    rules: {
      "@typescript-eslint/no-duplicate-enum-values": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal"],
          pathGroups: [
            {
              pattern: "{react,react-dom/**}",
              group: "builtin",
              position: "before",
            },
            {
              pattern: "{src/**, ./src/**}",
              group: "internal",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["src/**"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "prettier/prettier": [
        "error",
        {
          printWidth: 80,
          tabWidth: 2,
          trailingComma: "all",
          semi: true,
          endOfLine: "auto",
        },
      ],
    },
  },
];
