{
  "parser": "@typescript-eslint/parser", 
  "settings": {
    "react": {
      "version": "detect" 
    },
    "jest": {
      "version": 27
    }
  },
  "root": true,
  "parserOptions": {
    "ecmaVersion": "latest", 
    "sourceType": "module" ,
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "react-app",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": [
      "error",
      { "argsIgnorePattern": "^_" }
    ],
    "sort-imports": [
      "error",
      {
        "ignoreDeclarationSort": true
      }
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "never"
      }
    ],
    "react-hooks/rules-of-hooks": "error", 
    "react-hooks/exhaustive-deps": "warn", 
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "multiline-expression", "next": "*" },
      { "blankLine": "always", "prev": "*", "next": "multiline-expression" }
    ]
  },
  "overrides": [
  
    {
      "files": ["./**/*.spec.*", "./**/*.test.*"],
      "extends": [
        "plugin:cypress/recommended",
        "plugin:jest/recommended",
        "plugin:testing-library/react"
      ]
    },

    {
      "files": ["./**/*.story.*", "./**/*.stories.*"],
      "extends": ["plugin:storybook/recommended"]
    }
  ],
  "ignorePatterns": ["**/build/**", "**/coverage/**"]
}
