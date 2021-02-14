export default class Fichier {
  constructor(nom = "index.txt") {
    this.nom = nom
  }

  renommer(nom) {
    this.nom = nom
  }
}
