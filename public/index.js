import FauxOs from './assets/js/fauxOs.js'

const start = async () => {
  document.oncontextmenu = e => e.preventDefault()
  const fauxOs = new FauxOs()
}

document.addEventListener('readystatechange', () => {
  if (window.attachEvent) {
    window.attachEvent('onload', start)
  } else {
    const elem = (window.addEventListener) ? window : document
    elem.addEventListener('load', start, false)
  }
})
