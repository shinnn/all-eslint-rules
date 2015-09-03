'use strong';

const test = require('ava');
const arrayDifference = require('array-difference');
const eslintRules = require('./');
const fetchCheerioObject = require('fetch-cheerio-object');

test('The array includes all the ESLint rules.', t => {
  t.plan(1);

  fetchCheerioObject('http://eslint.org/docs/rules/').then($ => {
    const rulesOnWebsite = $('h2')
    .eq(0)
    .nextUntil('h2:contains(Removed)')
    .find('li a')
    .map((i, el) => $(el).attr('href'))
    .get();

    const diff = arrayDifference(eslintRules, rulesOnWebsite);
    t.same(diff, [], 'Diff: ' + JSON.stringify(diff));
  }).catch(t.error);
});
