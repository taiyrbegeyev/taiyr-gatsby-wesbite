---
title:  "Using formats with Prettier and lints with ESLint + StandardJS in a TypeScript Project"
date: 2020-06-03
tags:
  - TypeScript
  - prettier-standard
  - linting
  - formatting
slug: /using-eslint-and-prettier-in-typescript-project
banner: ./lint.jpg
---

![Linting](./lint.jpg)

In my last post, I discussed the importance of adopting linters and formatters in the projects. Furthermore, I went through the most widely-used libraries, such as **ESLint** + **StandardJS** and **Prettier**. You can read more about them here: <a href="https://taiyr.me/what-is-the-difference-between-code-linters-and-formatters" target="_blank">What is the difference between Code Linters and Formatters</a>

As migrating from JavaScript to **TypeScript**, you would also want to adopt these vital tools in your project. "Kid's stuff!" you might think. In reality, it is not as easy as installing prettier-standard library in a typical JS project. To the best of my knowledge, it doesn't currently support a TypeScript setup, meaning that it wouldn't work out of the box, and we would have to get our hands dirty by utilizing the config files. Dang it!

<br/>

#### Linting in Typescript

When it comes to linting TypeScript code, there are two main linting options to pick from: TSLint and ESLint. TSLint is a linter that can only be used for TypeScript, while ESLint supports both JavaScript and TypeScript. For that reason, I would recommend using ESLint for linting TypeScript projects. If you are like me, you probably love using **StandardJS** as your official style when writing TypeScript/JavaScript code.

The first thing we need to do is add all the necessary libraries to our TypeScript project:

```bash noLineNumbers
yarn add --dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise
```

Yeaaah, I know it is a large number of packages. This is due to a <a href="https://github.com/eslint/eslint/issues/3458" target="_blank">known limitation in ESLint</a>.

Let me briefly explain what each package stands for:
* **eslint**: the core ESLint linting library
* **@typescript-eslint/parser**: the parser that will allow ESLint to lint TypeScript code
* **@typescript-eslint/eslint-plugin**: the plugin that contains a bunch of ESLint rules that are TypeScript specific
* **eslint-config-standard**: the configuration for StandardJS rules
* other libraries: peer dependencies of eslint-config-standard

Secondly, we need to create a configuration file **.eslintrc** that is used to extend ESLint's basic rules with some other plugins, which is, in our case, Standard.

```json:title=.eslintrc
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json", // Required to have rules that rely on Types.
    "tsconfigRootDir": "./"
  },
  "extends": [
    "plugin:@typescript-eslint/recommended", // Out of the box Typescript rules
    "standard" // Out of the box StandardJS rules
  ],
  "plugins": [
    "@typescript-eslint" // Let"s us override rules below.
  ],
  "rules": {
    "@typescript-eslint/no-use-before-define": "off", // Allows us to hoist variables and functions which I am a fan of, functions not variables that is.
    "@typescript-eslint/no-explicit-any": "off", // Too strict for my case, sometimes I need an any type
    "@typescript-eslint/member-delimiter-style": ["error", { // Prevents us from using any delimiter for interface properties.
      "multiline": {
        "delimiter": "none",
        "requireLast": false
      },
      "singleline": {
        "delimiter": "comma",
        "requireLast": false
      }
    }],
    "@typescript-eslint/indent": "off", // This is the job of StandardJS, they are competing rules so we turn off the Typescript one. 
    "no-unused-vars": "off", // On the fence about using this one, sometimes we import a package that is never used directly. 
    "node/no-unsupported-features/es-syntax": "off" // Allows us to use Import and Export keywords.
  }
}
```

Eventually, it is up to you to decide what kind of rules you would like to extend from and which ones to use within the rules object.

<br/>

#### Formatting in TypeScript

What works well along with ESLint is Prettier, which does a great job at handling code formatting. Install the required dev dependencies to get prettier working with ESLint:

```bash noLineNumbers
yarn add --dev prettier eslint-config-prettier eslint-plugin-prettier
```

Let me briefly explain what each package stands for:
* **prettier**: the core prettier library
* **eslint-config-prettier**: disables ESLint rules that might conflict with prettier
* **eslint-plugin-prettier**: runs prettier as an ESLint rule

As with the ESLint example, the configuration file must be created. Here is a sample **.prettierrc** file:

```json:title=.prettierrc
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
}
```

Succeeding, the **.eslintrc** file needs to be updated:

```json:title=.eslintrc
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json", // Required to have rules that rely on Types.
    "tsconfigRootDir": "./"
  },
  "extends": [
    "plugin:@typescript-eslint/recommended", // Out of the box Typescript rules
    "standard", // Out of the box StandardJS rules
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  "plugins": [
    "@typescript-eslint" // Let"s us override rules below.
  ],
  "rules": {
    "@typescript-eslint/no-use-before-define": "off", // Allows us to hoist variables and functions which I am a fan of, functions not variables that is.
    "@typescript-eslint/no-explicit-any": "off", // Too strict for my case, sometimes I need an any type
    "@typescript-eslint/member-delimiter-style": ["error", { // Prevents us from using any delimiter for interface properties.
      "multiline": {
        "delimiter": "none",
        "requireLast": false
      },
      "singleline": {
        "delimiter": "comma",
        "requireLast": false
      }
    }],
    "@typescript-eslint/indent": "off", // This is the job of StandardJS, they are competing rules so we turn off the Typescript one. 
    "no-unused-vars": "off", // On the fence about using this one, sometimes we import a package that is never used directly. 
    "node/no-unsupported-features/es-syntax": "off" // Allows us to use Import and Export keywords.
  }
}
```

<br/>

#### Run linter and formatter with CLI

```json:title=package.json
{
  "scripts": {
    "format": "prettier --write '**/*.ts'",
    "lint": "tsc --noEmit && eslint '*/**/*.{js,ts,tsx}' --quiet --fix"
  }
}
```

<br/>

###### Credits

* [Dribble](https://dribbble.com/shots/6286611-Lint)
* [Typescript + ESLint and StandardJS](https://dev.to/itmayziii/typescript-eslint-and-standardjs-5hmd)
* [Using ESLint and Prettier in a TypeScript Project](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)

