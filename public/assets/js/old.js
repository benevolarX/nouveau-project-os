import FauxOs from './assets/js/fauxOs.js'

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

const initIconBureau = (src, nom = "") => {
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

const initBureau = () => {
  const bureau = document.getElementById('bureau')
  for (let i = 0; i < 19; i++) {
    for (let j = 0; j < 10; j++) {
      let div = document.createElement('div')
      div.classList.add('emplacement-bureau')
      div.ondragleave = allowLeave
      div.ondrop = drop
      div.ondragover = allowDrop
      bureau.appendChild(div)
    }
  }

  const poubelleVerte = initIconBureau("./assets/imgs/poubelle_verte.png", "poubelle verte")
  const poubelleJaune = initIconBureau("./assets/imgs/poubelle_jaune.png", "poubelle jaune")
  const poubelleBleu = initIconBureau("./assets/imgs/poubelle_bleu.png", "poubelle bleu")

  bureau.children[0].appendChild(poubelleVerte)
  bureau.children[1].appendChild(poubelleJaune)
  bureau.children[2].appendChild(poubelleBleu)

}

const initBarreTache = () => {
  const barre = document.getElementById('barre-tache')
}

const start = async () => {
  document.oncontextmenu = e => e.preventDefault()
  const fauxOs = new FauxOs()
  initBureau()
  initBarreTache()
}

document.addEventListener('readystatechange', () => {
  if (window.attachEvent) {
    window.attachEvent('onload', start)
  } else {
    const elem = (window.addEventListener) ? window : document
    elem.addEventListener('load', start, false)
  }
})
