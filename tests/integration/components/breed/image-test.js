import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | breed/image', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the given image with attributes', async function(assert) {

    await render(hbs`
    <Breed::Image
      src='assets/images/great-dane.jpg'
      alt='A Great Dane and Puppy'
    />
    `);

    assert.dom('.image').exists();
    assert.dom('.image img').hasAttribute('src', 'assets/images/great-dane.jpg');
    assert.dom('.image img').hasAttribute('alt', 'A Great Dane and Puppy');
  });

  test('clicking on the component toggles its size', async function(assert) {
    await render(hbs`
      <Breed::Image
        src='assets/images/great-dane.jpg'
        alt='A Great Dane and Puppy'
      />
    `);

    assert.dom('button.image').exists();

    assert.dom('.image').doesNotHaveClass('large');
    assert.dom('.image small').hasText('View Larger');

    await click('button.image');

    assert.dom('.image').hasClass('large');
    assert.dom('.image small').hasText('View Smaller');

    await click('button.image');

    assert.dom('.image').doesNotHaveClass('large');
    assert.dom('.image small').hasText('View Larger');
  });
});
