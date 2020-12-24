import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class BreedsComponent extends Component {
  @tracked query = '';
}