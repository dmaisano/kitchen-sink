const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
    "prettier",
    require.resolve("@vercel/style-guide/eslint/node"),
    "turbo",
  ],
  globals: {},
  env: {
    node: true,
    module: true,
  },
  plugins: ["only-warn"],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
};
