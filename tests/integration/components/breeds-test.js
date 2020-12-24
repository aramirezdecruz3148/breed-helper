import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | breeds', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.setProperties({
      breeds: [{
        id: "great-dane",
        name: "Great Dane",
        weight: "110-175 pounds",
        height: "28-32 inches",
        origin: "Germany",
        location: {
          lat: 52.5200,
          lng: 13.4050
        },
        group: "Working",
        image: "assets/images/great-dane.jpg",
        span: "7-10 years",
        description: `As tall as 32 inches at the shoulder, Danes tower 
        over most other dogs—and when standing on their hind legs, they 
        are taller than most people. These powerful giants are the picture 
        of elegance and balance, with the smooth and easy stride of born 
        noblemen. The coat comes in different colors and patterns, perhaps 
        the best-known being the black-and-white patchwork pattern known 
        as 'harlequin.' Despite their sweet nature, Danes are alert home 
        guardians. Just the sight of these gentle giants is usually 
        enough to make intruders think twice. But those foolish enough 
        to mistake the breed’s friendliness for softness will meet a 
        powerful foe of true courage and spirit. Patient with kids, 
        Danes are people pleasers who make friends easily.`
      },
      {
        id: "irish-wolfhound",
        name: "Irish Wolfhound",
        weight: "105-120 pounds",
        height: "30-32 inches",
        origin: "Ireland",
        location: {
          lat: 53.3498,
          lng: -6.266155
        },
        group: "Hound",
        image: "assets/images/irish-wolf-hound.jpg",
        span: "6-8 years",
        description: `The amiable Irish Wolfhound is an immense, 
        muscular hound gracefully built along classic Greyhound 
        lines, capable of great speed at the gallop. A male might 
        stand nearly 3 feet at the shoulder and weigh up to 180 pounds. 
        Females will run smaller but are still a whole lot of hound. 
        The rough, hard coat comes in many colors, including white, gray, 
        brindle, red, black, and fawn. IWs are too serene to be fierce guard 
        dogs, but just the sight of them is enough to deter intruders. 
        IWs are characteristically patient with kids, though animals their 
        size should be supervised around small children. Owning an Irish Wolfhound 
        is a unique, rewarding experience—but acquiring a giant galloping hound is a 
        commitment as big as the dog itself.`
      },
      {
        id: "mastiff",
        name: "Mastiff",
        weight: "120-230 pounds",
        height: "27-30 inches",
        origin: "England",
        location: {
          lat: 51.5074,
          lng: -0.1278 
        },
        group: "Working",
        image: "assets/images/mastiff.jpg",
        span: "6-10 years",
        description: `For the uninitiated, a face-to-face encounter with these 
        black-masked giants can be startling. A male stands at least 30 inches 
        at the shoulder and can outweigh many a full-grown man. The rectangular 
        body is deep and thickly muscled, covered by a short double coat of fawn, 
        apricot, or brindle stripes. The head is broad and massive, and a wrinkled 
        forehead accentuates an alert, kindly expression. Mastiffs are patient, 
        lovable companions and guardians who take best to gentle training. Eternally 
        loyal Mastiffs are protective of family, and a natural wariness of strangers 
        makes early training and socialization essential. Mastiffs are magnificent pets, 
        but acquiring a powerful giant-breed dog is commitment not to be taken lightly.`
      }]
    });
  });

    
  test('it renders all given breeds by default', async function(assert) {
    await render(hbs`<Breeds @breeds={{this.breeds}} />`);

    assert.dom('.breeds').exists();
    assert.dom('.breeds input').exists();

    assert.dom('.breeds .results').exists();
    assert.dom('.breeds .results li').exists({ count: 3 });

    assert.dom('.breeds .results li:nth-of-type(1)').containsText('Great Dane');
    assert.dom('.breeds .results li:nth-of-type(2)').containsText('Irish Wolfhound');
    assert.dom('.breeds .results li:nth-of-type(3)').containsText('Mastiff');
  });

  test('it updates the results according to the search query', async function(assert) {
    await render(hbs`<Breeds @breeds={{this.breeds}} />`);

    assert.dom('.breeds').exists();
    assert.dom('.breeds input').exists();

    await fillIn('.breeds input', 'great');

    assert.dom('.breeds .results').exists();
    assert.dom('.breeds .results li').exists({ count: 1 });
    assert.dom('.breeds .results li').containsText('Great Dane');

    await fillIn('.breeds input', 'Mast');

    assert.dom('.breeds .results').exists();
    assert.dom('.breeds .results li').exists({ count: 1 });
    assert.dom('.breeds .results li').containsText('Mastiff');
  });
});