import Component from '@glimmer/component';

export default class BreedsFilterComponent extends Component {
  get results() {
    let { breeds, query } = this.args;

    if (query) {
      breeds = breeds.filter(breed => breed.name.toLowerCase().includes(query.toLowerCase()));
    }

    return breeds;
  }
}