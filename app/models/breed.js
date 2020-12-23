import Model, { attr } from '@ember-data/model';

export default class BreedModel extends Model {
  @attr name;
  @attr weight;
  @attr height;
  @attr origin;
  @attr location;
  @attr group;
  @attr image;
  @attr span;
  @attr description;
}