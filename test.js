import test from 'ava';
import arrayDifference from 'array-difference';
import eslintRules from '.';
import fetchCheerioObject from 'fetch-cheerio-object';

test('The array includes all the ESLint rules.', async t => {
  t.plan(1);

  const $ = await fetchCheerioObject('http://eslint.org/docs/rules/');
  const rulesOnWebsite = $('h2')
  .eq(0)
  .nextUntil('h2:contains(Removed)')
  .find('td a')
  .map((i, el) => $(el).attr('href'))
  .get();

  const diff = arrayDifference(eslintRules, rulesOnWebsite);
  t.deepEqual(diff, []);
});
