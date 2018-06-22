import test from 'ava';
import difference from 'lodash/fp/difference';
import allEslintRules from '.';
import fetchCheerioObject from 'fetch-cheerio-object';

test('The array includes all the ESLint rules except for the deprecated or removed ones.', async t => {
	const $ = await fetchCheerioObject('http://eslint.org/docs/rules/');
	const rulesOnWebsite = $('h2')
	.eq(0)
	.nextUntil('#deprecated')
	.find('td a')
	.map((i, el) => $(el).attr('href'))
	.get();

	t.deepEqual(difference(allEslintRules, rulesOnWebsite), []);
});
