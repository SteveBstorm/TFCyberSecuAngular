import { Component } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component {

  listeFruits : string[] = ["Pomme", "Poire", "Citron", "Banane", "Fraise"]

  listeClients : any[] = [
    { id : 1, name : "Loic", ordered : true},
    { id : 2, name : "Louis", ordered : false},
    { id : 3, name : "Jen", ordered : true},
    { id : 4, name : "Fred", ordered : false}
  ]

  isShowTexte1 : boolean = false
  isShowTexte2 : boolean = false


  triggerTexte1()
  {
    this.isShowTexte1 = !this.isShowTexte1
  }

  triggerTexte2()
  {
    this.isShowTexte2 = !this.isShowTexte2
  }
}
