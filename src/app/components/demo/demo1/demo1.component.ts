import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component {
  myProp! : string | null

  maListe : string[] = []


  nouveauJeu : Jeu = {
    nom : "Magic",
    duree : 40,
    nbJoueur : 2
  }
  constructor() {
    this.myProp = "salut"
    //this.myProp = null
  }
}

export interface Jeu {
  nom : string
  duree : number
  nbJoueur : number
}

export class Personne {
  nom! : string
  constructor(nom : string){
    this.nom = nom
  }
}
