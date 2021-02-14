import Dossier from './dossier.js';
import Page from './page.js';

export default class FauxOs {
  constructor() {
    this.apps = []
    this.disque = new Dossier('C:')
    this.page = new Page()
  }
}
