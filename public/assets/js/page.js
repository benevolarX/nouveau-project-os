import Bureau from './bureau.js';
import BarreTache from './barreTache.js';

export default class Page {

  constructor() {
    this.page = document.createElement('div')
    this.page.classList.add('page')
    this.page.id = 'page'

    this.bureau = new Bureau()
    this.bureau.mount(this.page)

    this.barreTache = new BarreTache()
    this.barreTache.mount(this.page)

    const site = document.getElementById('site')
    site.appendChild(this.page)
  }

}