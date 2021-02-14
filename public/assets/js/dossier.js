import Fichier from './fichier.js'

export default class Dossier extends Fichier {
  constructor(nom = "C:") {
    super(nom)
    this.fichiers = []
  }

  ajouterFichier(fichier) {
    this.fichiers.push(fichier)
  }
}
