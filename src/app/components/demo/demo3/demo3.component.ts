import { Component } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component {
  myString : string = "SaLut lEs GlanDuS"
  myNumber : number = 127.249
  myDate : Date = new Date()
  myObject : any = {nom : "Arthur", age : 42}

  euro : number = 100000
  poweredLoulou : number = 42

  secondesConverter : number = 1117652

}
