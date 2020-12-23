import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | breed/detailed', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.setProperties({
      breed: {
        id: 'great-dane',
        name: 'Great Dane',
        weight: '110 - 175',
        height: '28 - 32 inches',
        origin: 'Germany',
        location: {
          lat: 52.5200,
          lng: 13.4050,
        },
        group: 'Working',
        bedrooms: 15,
        image: 'assets/images/great-dane.jpg',
        span: '7 - 10 years',
        description: `As tall as 32 inches at the shoulder, Danes tower over 
        most other dogs—and when standing on their hind legs, they are taller 
        than most people. These powerful giants are the picture of elegance 
        and balance, with the smooth and easy stride of born noblemen. 
        The coat comes in different colors and patterns, perhaps the best-known 
        being the black-and-white patchwork pattern known as "harlequin." 
        Despite their sweet nature, Danes are alert home guardians. 
        Just the sight of these gentle giants is usually enough to make intruders 
        think twice. But those foolish enough to mistake the breed’s friendliness 
        for softness will meet a powerful foe of true courage and spirit. Patient 
        with kids, Danes are people pleasers who make friends easily.`
      }
    });
  })

  test('it renders a header with a share button', async function(assert) {
    await render(hbs`<Breed::Detailed @breed={{this.breed}} />`);

    assert.dom('.jumbo').exists();
    assert.dom('.jumbo h2').containsText('Great Dane');
    assert.dom('.jumbo p').containsText('Could this be the breed for you?');
    assert.dom('.jumbo a.button').containsText('Share on Twitter');
  });

  test('it renders detailed information about a rental property', async function(assert) {
    await render(hbs`<Breed::Detailed @breed={{this.breed}} />`);

    assert.dom('article').hasClass('breed');
    assert.dom('article h3').hasText('About Great Dane');
    assert.dom('article .detail.weight').includesText('110 - 175');
    assert.dom('article .detail.height').includesText('28 - 32 inches');
    assert.dom('article .detail.life-span').includesText('7 - 10 years');
    assert.dom('article .detail.breed-group').includesText('Working');
    assert.dom('article .detail.country-of-origin').includesText('Germany');
    assert.dom('article .image').exists();
    assert.dom('article .map').exists();
  });
});
