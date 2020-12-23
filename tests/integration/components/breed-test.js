import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | breed', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders details about a breed', async function(assert) {
    this.setProperties({
      breed: {
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
      }
    });
    
    await render(hbs `<Breed @breed={{this.breed}} />`);

    assert.dom('article').hasClass('breed');
    assert.dom('article h3').hasText('Great Dane');
    assert.dom('article .detail.weight').includesText('110 - 175');
    assert.dom('article .detail.height').includesText('28 - 32 inches');
    assert.dom('article .detail.life-span').includesText('7 - 10 years');
    assert.dom('article .detail.breed-group').includesText('Working');
    assert.dom('article .detail.country-of-origin').includesText('Germany');
    assert.dom('article .image').exists();
    assert.dom('article .map').exists();
  });
});
