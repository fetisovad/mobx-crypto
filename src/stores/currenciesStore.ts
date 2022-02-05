import { observable, computed, action } from 'mobx';
import { TCoin } from '../types';

class ConverterStore {
  @observable private items: TCoin[] = [];

  @computed
  get getItems() {
    return this.items;
  }

  @action
  setItems = (items: TCoin[]): void => {
    this.items = items;
  }
}

export default ConverterStore;
