'use strict';

const {deepEqual} = require('assert').strict;

const allEslintRules = require('.');
const difference = require('lodash/difference');
const test = require('testit');
const fetchCheerioObject = require('fetch-cheerio-object');

test('include all the ESLint rules except for the deprecated or removed ones', async () => {
	const $ = await fetchCheerioObject('https://eslint.org/docs/rules/');
	const rulesOnWebsite = $('h2')
	.eq(0)
	.nextUntil('#deprecated')
	.find('td a')
	.map((i, el) => $(el).attr('href'))
	.get();

	deepEqual(difference(allEslintRules, rulesOnWebsite), []);
});
