function allowDrop(ev) {
  ev.preventDefault();
  ev.target.classList.add('can-drop');
  if (ev.target.classList.contains('emplacement-bureau')) {
    ev.target.classList.add('can-drop');
  } else {
    ev.target.classList.add('cant-drop');
  }
}

function allowLeave(ev) {
  ev.preventDefault();
  ev.target.classList.remove('can-drop');
  ev.target.classList.remove('cant-drop');
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  ev.target.classList.remove('can-drop');
  ev.target.classList.remove('cant-drop');
  if (ev.target.classList.contains('emplacement-bureau')) {
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
}

export default class Bureau {

  constructor() {
    this.icons = [
      {}
    ]
    this.bureau = document.createElement('div')
    this.bureau.id = 'bureau'
    this.bureau.classList.add('bureau')

    for (let i = 0; i < 19; i++) {
      for (let j = 0; j < 10; j++) {
        let div = document.createElement('div')
        div.classList.add('emplacement-bureau')
        div.ondragleave = allowLeave
        div.ondrop = drop
        div.ondragover = allowDrop
        this.bureau.appendChild(div)
      }
    }

    const poubelleVerte = this.initIconBureau("./assets/imgs/logos/poubelle_verte.png", "poubelle verte")
    const poubelleJaune = this.initIconBureau("./assets/imgs/logos/poubelle_jaune.png", "poubelle jaune")
    const poubelleBleu = this.initIconBureau("./assets/imgs/logos/poubelle_bleu.png", "poubelle bleu")

    this.bureau.children[0].appendChild(poubelleVerte)
    this.bureau.children[1].appendChild(poubelleJaune)
    this.bureau.children[2].appendChild(poubelleBleu)
  }

  initIconBureau(src, nom = "") {
    const icon = document.createElement('img')
    icon.classList.add('logo-bureau')
    icon.draggable = true
    icon.ondragstart = drag
    icon.src = src
    icon.id = nom.replace(' ', '_')
    icon.alt = `logo ${nom}`
    icon.title = nom
    return icon
  }

  mount(page) {
    page.appendChild(this.bureau)
  }
}