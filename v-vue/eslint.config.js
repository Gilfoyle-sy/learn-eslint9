import tsParser from "@typescript-eslint/parser";
import vueParser from "vue-eslint-parser"

export default {
  files: ["**/*.ts", "**/*.vue"],
  rules: {
    "no-console": "error",
    "no-unused-vars": "error",
  },
  languageOptions: {
    parser: vueParser,
    parserOptions: {
      parser: tsParser,
    }
  }
}
