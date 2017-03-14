# all-eslint-rules

[![NPM version](https://img.shields.io/npm/v/all-eslint-rules.svg)](https://www.npmjs.com/package/all-eslint-rules)
[![Build Status](https://travis-ci.org/shinnn/all-eslint-rules.svg?branch=master)](https://travis-ci.org/shinnn/all-eslint-rules)
[![Dependency Status](https://david-dm.org/shinnn/all-eslint-rules.svg)](https://david-dm.org/shinnn/all-eslint-rules)
[![devDependency Status](https://david-dm.org/shinnn/all-eslint-rules/dev-status.svg)](https://david-dm.org/shinnn/all-eslint-rules#info=devDependencies)

An array of the all available [ESLint rules](http://eslint.org/docs/rules/)

```javascript
[
  'accessor-pairs',
  'array-bracket-spacing',
  'array-callback-return',
  // ...
]
```

## Installation

[Use npm](https://docs.npmjs.com/cli/install).

```
npm install all-eslint-rules
```

## API

```javascript
const allEslintRules = require('all-eslint-rules');
```

### allEslintRules

Type: `Array` of `String`

The array contains the names of all ESLint rules included in the [`eslint:all`](http://eslint.org/docs/user-guide/configuring#using-eslintall) preset. Deprecated/removed rules are excluded.

```javascript
allEslintRules.includes('quotes'); //=> true

allEslintRules.includes('no-native-reassign'); //=> false
allEslintRules.includes('generator-star') //=> false
```

## License

Copyright (c) 2015 - 2017 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
