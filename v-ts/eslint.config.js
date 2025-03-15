// import pluginJs from "@eslint/js";

// export default [
//   pluginJs.configs.recommended,

//   {
//     rules: {
//       "no-unused-vars": "warn",
//       "no-undef": "warn"
//     }
//   }
// ];

import tsParser from "@typescript-eslint/parser";

export default {
  files: ["**/*.ts"],
  rules: {
    "no-console": "error",
    "no-unused-vars": "error",
  },
  languageOptions: {
    parser: tsParser,
  }
}
