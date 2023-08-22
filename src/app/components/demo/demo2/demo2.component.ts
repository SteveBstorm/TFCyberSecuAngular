import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component {
  myValue : string = "coucou"

  monChiffre : number = 0

  increment(nbr : number) : void {
    this.monChiffre += nbr
  }

  decrement() : void {
    this.monChiffre--
  }

}
