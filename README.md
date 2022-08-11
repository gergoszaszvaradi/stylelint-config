# `@gergoszaszvaradi/stylelint-config`

Personal StyleLint configuration and rules

## Installation
Install this config package:
```bash
npm i -D @gergoszaszvaradi/stylelint-config
```
```bash
yarn add -D @gergoszaszvaradi/stylelint-config
```

## Usage
Extend your stylelint config file with the stylelintrc provided by this package.

`.stylelintrc.json`
```json
{
    "extends": "@gergoszaszvaradi/stylelint-config"
}
```
### Overriding Rules
You can still override certain rules by defining the rules again in your config file:

`.stylelintrc.json`
```json
{
    // ...
    "indentation": 2
}
```
Before turning off already defined rules, check the StyleLint documentation for the benefits of using those rules.
* StyleLint: https://stylelint.io/user-guide/rules/list
* StyleLint SCSS: https://github.com/stylelint-scss/stylelint-scss