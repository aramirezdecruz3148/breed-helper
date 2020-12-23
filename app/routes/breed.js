import Route from '@ember/routing/route';

export default class BreedRoute extends Route {
  async model(params) {
    let response = await fetch(`/api/breeds/${params.breed_id}.json`);
    let { data } = await response.json();

    let { id, attributes } = data;

    return { id, ...attributes };
  }
}