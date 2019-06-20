'use strict';

const {CLIEngine} = require('eslint');
const inspectWithKind = require('inspect-with-kind');
const isPlainObject = require('lodash/isPlainObject');

module.exports = function allEslintRules(...args) {
	const argLen = args.length;
	const [options] = args;
	const isCLIEngine = options instanceof CLIEngine;

	if (argLen === 1) {
		if (!isPlainObject(options) && !isCLIEngine) {
			const error = new TypeError(`Expected a ESLint's CLIEngine instance or an plain object to set CLIEngine options, but got ${
				inspectWithKind(options)
			}.`);

			error.code = 'ERR_INVALID_ARG_TYPE';
			throw error;
		}
	} else if (argLen !== 0) {
		const error = new RangeError(`Expected 0 or 1 argument (<Object>), but got ${argLen} arguments.`);

		error.code = 'ERR_TOO_MANY_ARGS';
		throw error;
	}

	const rules = [];
	let cli;

	if (isCLIEngine) {
		cli = options;
	} else {
		cli = new CLIEngine(...args);

		// load plugins
		cli.executeOnText('');
	}

	for (const [key, {meta}] of cli.getRules()) {
		if (meta && meta.deprecated) {
			continue;
		}

		rules.push(key);
	}

	return rules;
};
