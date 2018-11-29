'use strict';

const allEslintRules = require('.');
const difference = require('lodash/difference');
const test = require('tape');
const fetchCheerioObject = require('fetch-cheerio-object');

test('all-eslint-rules', async t => {
	const $ = await fetchCheerioObject('https://eslint.org/docs/rules/');
	const rulesOnWebsite = $('h2')
	.eq(0)
	.nextUntil('#deprecated')
	.find('td a')
	.map((i, el) => $(el).attr('href'))
	.get();

	t.deepEqual(
		difference(allEslintRules, rulesOnWebsite),
		[],
		'should include all the ESLint rules except for the deprecated or removed ones.'
	);

	t.end();
});
