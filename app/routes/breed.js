import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BreedRoute extends Route {
  @service store

  async model(params) {
    return this.store.findRecord('breed', params.breed_id);
  }
}