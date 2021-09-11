module.exports = {
  // https://www.npmjs.com/package/@typescript-eslint/parser
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  extends: [
    "eslint:recommended",
    "standard-with-typescript",
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier"
  ],
  parserOptions: {
    /**
     * Default undefined.
     * This option allows you to provide a path to your project's tsconfig.json.
     * This setting is required if you want to use rules which require type information.
     * Relative paths are interpreted relative to the current working directory if tsconfigRootDir is not set.
     * If you intend on running ESLint from directories other than the project root, you should consider using tsconfigRootDir.
     */
    project: "./tsconfig.json",
    /**
     * Default undefined.
     * This option allows you to provide the root directory for relative tsconfig paths specified in the project option above.
     */
    tsconfigRootDir: __dirname,
    /**
     * Default false.
     * This option allows you to request that when the project setting is specified,
     * files will be allowed when not included in the projects defined by the provided tsconfig.json files.
     * Using this option will incur significant performance costs. This option is primarily included for backwards-compatibility.
     */
    createDefaultProgram: false
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  env: {
    jest: true,
    browser: true
  },
  rules: {
    quotes: ["error", "double", { avoidEscape: true, allowTemplateLiterals: false }],
    "comma-style": ["error", "last"],
    "comma-dangle": ["error", "never"],
    "prefer-const": "off",
    "no-case-declarations": "off",
    "no-var": "error",
    "no-extra-boolean-cast": "error",
    "no-new-wrappers": "error",
    semi: "off",
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always"
      }
    ],
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        assertionStyle: "never"
      }
    ],
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": [
      "error",
      {
        allowComparingNullableBooleansToTrue: false,
        allowComparingNullableBooleansToFalse: false
      }
    ],
    "@typescript-eslint/no-magic-numbers": [
      "error",
      {
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
        ignore: [-90, -30, -5, -3, -2, -1, 0, 1, 2, 3, 4, 5, 10, 50, 60, 90, 100, 1000],
        enforceConst: true
      }
    ],
    // disabled
    "@typescript-eslint/strict-boolean-expressions": [
      "off",
      {
        allowString: true,
        allowNumber: true,
        allowNullableObject: true,
        allowNullableBoolean: false,
        allowNullableString: false,
        allowNullableNumber: false,
        allowAny: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false
      }
    ],
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/lines-between-class-members": "off",
    "@typescript-eslint/prefer-optional-chain": "off",
    "@typescript-eslint/return-await": "off",
    "@typescript-eslint/no-invalid-void-type": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/prefer-includes": "off",
    "@typescript-eslint/method-signature-style": "off",
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/prefer-ts-expect-error": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: true
        }
      }
    ],
    // jsx
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/no-unescaped-entities": "warn",
    "react/jsx-curly-spacing": "warn",
    "react/jsx-equals-spacing": "warn",
    // typescript
    "@typescript-eslint/restrict-plus-operands": "error",
    "prefer-promise-reject-errors": "error",
    "valid-jsdoc": "off",
    "@typescript-eslint/no-array-constructor": "warn",
    // note you must disable the base rule as it can report incorrect errors
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "warn",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/explicit-member-accessibility": "off"
  }
};