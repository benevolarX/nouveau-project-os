import Fichier from './fichier.js'

export default class Application extends Fichier {
  constructor(nom = "internet.exe") {
    super(nom)
  }
}
