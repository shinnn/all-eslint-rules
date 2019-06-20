import {strict as assert} from 'assert';

import allEslintRules from '.';
import eslint from 'eslint';
import test from 'testit';

test('return an Array of strings', () => {
	const rules = allEslintRules();

	assert(Array.isArray(rules));

	for (const rule of rules) {
		assert.equal(typeof rule, 'string');
	}
});

test('include all available ESLint rules', () => {
	assert(allEslintRules({useEslintrc: false}).length > 150);
});

test('accept an CLIEngine instance', () => {
	const rules = allEslintRules(new eslint.CLIEngine());

	assert(rules.includes('valid-typeof'));
	assert(rules.includes('wrap-regex'));
});

test('include rules defined by plugins', () => {
	const rules = allEslintRules({});

	assert(rules.includes('node/no-deprecated-api'));
	assert(rules.includes('promise/param-names'));
});

test('exclude deprecated rules', () => {
	const rules = allEslintRules();

	assert(!rules.includes('indent-legacy'));
	assert(!rules.includes('lines-around-directive'));
	assert(!rules.includes('node/no-hide-core-modules'));
});

test('invalidate arguments neither a CLIEngine nor a plain object', () => {
	assert.throws(() => allEslintRules(new Map()), {
		name: 'TypeError',
		code: 'ERR_INVALID_ARG_TYPE',
		message: 'Expected a ESLint\'s CLIEngine instance or an plain object to set CLIEngine options, but got Map {}.'
	});
});

test('invalidate too many arguments', () => {
	assert.throws(() => allEslintRules({}, {}), {
		name: 'RangeError',
		code: 'ERR_TOO_MANY_ARGS',
		message: 'Expected 0 or 1 argument (<Object>), but got 2 arguments.'
	});
});
