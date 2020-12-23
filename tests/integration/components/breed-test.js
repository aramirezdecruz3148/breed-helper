import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | breed', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders details about a breed', async function(assert) {
    await render(hbs`<Breed />`);

    assert.dom('article').hasClass('breed');
    assert.dom('article h3').hasText('Great Dane');
    assert.dom('article .detail.weight').includesText('110 - 175');
    assert.dom('article .detail.height').includesText('28 - 32 inches');
    assert.dom('article .detail.life-span').includesText('7 - 10 years');
    assert.dom('article .detail.breed-group').includesText('Working');
    assert.dom('article .detail.country-of-origin').includesText('Germany');
    assert.dom('article .detail.temperament').includesText('Friendly, gentle, loving');
    assert.dom('article .image').exists();
    assert.dom('article .map').exists();
  });
});
