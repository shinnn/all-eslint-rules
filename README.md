# all-eslint-rules

[![npm version](https://img.shields.io/npm/v/all-eslint-rules.svg)](https://www.npmjs.com/package/all-eslint-rules)
[![GitHub Actions](https://action-badges.now.sh/shinnn/all-eslint-rules)](https://wdp9fww0r9.execute-api.us-west-2.amazonaws.com/production/results/shinnn/all-eslint-rules)
[![codecov](https://codecov.io/gh/shinnn/all-eslint-rules/branch/master/graph/badge.svg)](https://codecov.io/gh/shinnn/all-eslint-rules)

Get all available [ESLint](https://eslint.org) rules

```javascript
const allEslintRules = require('all-eslint-rules');

allEslintRules();
//=> ['accessor-pairs', 'array-bracket-newline', 'array-bracket-spacing', ...]
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

### allEslintRules([*options*])

*options*: `Object | CLIEngine`  
Return: `string[]`

It returns an `Array` of available [ESLint](https://github.com/eslint/eslint) rule names – [the built-in ones](https://eslint.org/docs/rules/) and the ones defined by external [plugins](https://eslint.org/docs/user-guide/configuring#configuring-plugins). [Deprecated](https://eslint.org/docs/rules/#deprecated) rules are excluded.

```javascript
const rules = allEslintRules();

// Both indent-legacy and no-spaced-func are deprecated.
rules.includes('indent-legacy'); //=> false
rules.includes('no-spaced-func'); //=> false
```

The optional parameter accepts either a plain `Object` to set [`CLIEngine`](https://eslint.org/docs/developer-guide/nodejs-api#cliengine) options or an already instantiated `CLIEngine`, and affects the result.

```javascript
// When eslint-plugin-promise https://www.npmjs.com/package/eslint-plugin-promise is installed

allEslintRules({
  useEslintrc: false,
  plugins: []
}).includes('promise/param-names'); //=> false

allEslintRules({
  useEslintrc: false,
  plugins: ['promise']
}).includes('promise/param-names'); //=> true
```

## License

[ISC License](./LICENSE) © 2018 - 2019 Watanabe Shinnosuke
