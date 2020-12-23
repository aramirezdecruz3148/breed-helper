import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | breed', function(hooks) {
  setupTest(hooks);

  test('it has the right id', function(assert) {
    let store = this.owner.lookup('service:store');

    let breed = store.createRecord('breed', {
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
    });

    assert.equal(breed.id, 'great-dane');
  });
});
