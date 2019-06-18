# all-eslint-rules

[![npm version](https://img.shields.io/npm/v/all-eslint-rules.svg)](https://www.npmjs.com/package/all-eslint-rules)
[![Build Status](https://travis-ci.com/shinnn/all-eslint-rules.svg?branch=master)](https://travis-ci.com/shinnn/all-eslint-rules)

An [`Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) of the all [ESLint rules](https://eslint.org/docs/rules/)

```javascript
[
  'accessor-pairs',
  'array-bracket-newline',
  'array-bracket-spacing',
  // ...
]
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install all-eslint-rules
```

## API

```javascript
const allEslintRules = require('all-eslint-rules');
```

### allEslintRules

Type: `string[]`

The `Array` contains the names of all ESLint rules included in the [`eslint:all`](https://eslint.org/docs/user-guide/configuring#using-eslintall) preset. Deprecated/removed rules are excluded.

```javascript
allEslintRules.includes('quotes'); //=> true

allEslintRules.includes('no-native-reassign'); //=> false
allEslintRules.includes('generator-star') //=> false
```

## License

[ISC License](./LICENSE) © 2018 - 2019 Watanabe Shinnosuke
