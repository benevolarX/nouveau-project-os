
export default class BarreTache {
  constructor() {
    this.apps = [
      {
        enable: true,
        title: 'Terminal',
        src: './assets/imgs/logos/terminal.png',
        alt: 'logo terminal'
      },
      {
        enable: true,
        title: 'Notes',
        src: './assets/imgs/logos/notes.png',
        alt: 'logo bloc notes'
      },
      {
        enable: false,
        title: 'Gimp',
        src: './assets/imgs/logos/gimp.png',
        alt: 'logo gimp'
      },
      {
        enable: true,
        title: 'Internet',
        src: './assets/imgs/logos/firechrome.png',
        alt: 'logo firechrome'
      }
    ]



    this.barreTache = document.createElement('footer')
    this.barreTache.id = "barre-tache"
    this.barreTache.classList.add('barre-windows-footer')

    const form = document.createElement('form')
    form.classList.add('barre-windows-form')

    this.addStartBtn(form)
    this.addCortana(form)
    this.addIcons(form)

    this.barreTache.appendChild(form)

    window.setTimeout(() => {
      this.addStartMenu()
    }, 2000)
  }

  addStartMenu() {
    const page = document.getElementById('page')
    console.log(page)
    const menu = document.createElement('div')
    menu.classList.add('menu-start')

    const icons = document.createElement('div')
    icons.classList.add('menu-start-icons')
    // arreter / parametres
    const stop = this.createIcon('./assets/imgs/logos/eteindre.png', 'Arrêter', 'éteindre le pc')
    icons.appendChild(stop)
    menu.appendChild(icons)


    const applications = document.createElement('div')
    applications.classList.add('menu-start-recent-apps')
    // recent apps
    for (let a = 0; a < 26; a++) {
      const lettre = document.createElement('div')
      lettre.innerHTML = `-- ${String.fromCharCode(65 + a)} --`
      applications.appendChild(lettre)
      const max = Math.max(0, Math.round(Math.random() * 5) - 1)
      for (let i = 0; i < max; i++) {
        const recentapp = document.createElement('div')
        recentapp.innerHTML = 'bla bla'
        recentapp.classList.add('recent-app')
        applications.appendChild(recentapp)
      }
    }

    menu.appendChild(applications)

    page.appendChild(menu)
  }

  toggleStartMenu(toggle = true) {
    const val = document.documentElement.style.getPropertyValue('--menu-start-position')
    const nv = (val !== '780px') ? '780px' : '0px'
    document.documentElement.style.setProperty('--menu-start-position', nv)
  }

  addStartBtn(form) {
    const p = document.createElement('p')
    this.demarer = document.createElement('img')
    this.demarer.src = './assets/imgs/logos/winbuntu.png'
    this.demarer.classList.add('btn-barre-tache', 'tooltip')
    this.demarer.title = 'Démarrer'
    this.demarer.alt = 'logo winbuntu'
    this.demarer.addEventListener('click', e => this.toggleStartMenu())
    p.appendChild(this.demarer)
    form.appendChild(p)
  }

  addCortana(form) {

    const input = document.createElement('input')
    input.id = 'chercher'
    input.name = 'chercher'
    input.type = 'text'
    input.classList.add('input-chercher')
    input.placeholder = ' Tapez ici pour effectuer une recherche '

    const label = document.createElement('label')
    label.for = 'label-chercher'
    label.appendChild(input)

    const div = document.createElement('div')
    div.classList.add('center', 'div-chercher')
    div.appendChild(label)

    form.appendChild(div)
  }

  addIcons(form) {
    const grid = document.createElement('div')
    grid.classList.add('grid-icon-barre-tache')
    for (let i = 0; i < this.apps.length; i++) {
      const app = this.apps[i]
      if (app.enable) {
        const p = this.createIcon(app.src, app.title, app.alt)
        grid.appendChild(p)
      }
    }
    this.addHour(grid)
    form.appendChild(grid)
  }

  createIcon(src, title, alt) {
    const p = document.createElement('p')
    p.classList.add('btn-barre-tache')
    const img = document.createElement('img')
    img.src = src
    img.title = title
    img.alt = alt
    p.appendChild(img)
    return p
  }

  addHour(form) {
    const hour = document.createElement('p')
    hour.classList.add('btn-barre-tache', 'heure')
    window.setInterval(() => {
      const t = new Date()
      hour.innerHTML = `${t.toLocaleTimeString()} <br/> ${t.toLocaleDateString()}`
    }, 1000)
    form.appendChild(hour)
  }

  mount(page) {
    page.appendChild(this.barreTache)
  }
}