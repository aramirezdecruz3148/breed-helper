import { module, test } from 'qunit';
import { click, find, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | breed helper', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('🐾 BreedFinder');
    assert.dom('h2').hasText('Welcome to Breed Finder');

    assert.dom('.jumbo a.button').hasText('About Us');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/about');

    assert.dom('.jumbo a.button').hasText('Contact Us');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/contact');
  });

  test('viewing the details of a single breed', async function(assert) {
    await visit('/');
    assert.dom('.breed').exists({ count: 5 });

    await click('.breed:first-of-type a');
    assert.equal(currentURL(), '/breeds/great-dane');
  });

  test('visiting /breeds/great-dane', async function(assert) {
    await visit('/breeds/great-dane');

    assert.equal(currentURL(), '/breeds/great-dane');
    assert.dom('nav').exists();
    assert.dom('h1').containsText('BreedFinder');
    assert.dom('h2').containsText('Great Dane');
    assert.dom('.breed.detailed').exists();
    assert.dom('.share.button').hasText('Share on Twitter');

    let button = find('.share.button');

    let tweetURL = new URL(button.href);
    assert.equal(tweetURL.host, 'twitter.com');

    assert.equal(
      tweetURL.searchParams.get('url'),
      `${window.location.origin}/breeds/great-dane`
    );
  });

  test('visiting /about', async function(assert) {
    await visit('/about');

    assert.equal(currentURL(), '/about');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('🐾 BreedFinder');
    assert.dom('h2').hasText('About Breed Finder');

    assert.dom('.jumbo a.button').hasText('Contact Us');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/contact');
  });

  test('visiting /contact', async function(assert) {
    await visit('/contact');

    assert.equal(currentURL(), '/contact');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('🐾 BreedFinder');
    assert.dom('h2').hasText('Contact Us');

    assert.dom('.jumbo a.button').hasText('About Us');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/about');
  });

  test('navigating using the nav-bar', async function(assert) {
    await visit('/');

    assert.dom('nav').exists();
    assert.dom('nav a.menu-index').hasText('🐾 BreedFinder');
    assert.dom('nav a.menu-about').hasText('About');
    assert.dom('nav a.menu-contact').hasText('Contact');

    await click('nav a.menu-about');
    assert.equal(currentURL(), '/about');

    await click('nav a.menu-contact');
    assert.equal(currentURL(), '/contact');

    await click('nav a.menu-index');
    assert.equal(currentURL(), '/');
  });
});
