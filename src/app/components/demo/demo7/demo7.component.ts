import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.scss']
})
export class Demo7Component {

  login : string = "loic"
  password : string = "test1234"

  isConnect : boolean = false

  constructor(private authServe : AuthService){
    this.isConnect = this.authServe.isConnect
  }

  connect(){
    this.isConnect = this.authServe.connect()
  }

  deconnect(){
    this.isConnect = this.authServe.deconnect()
  }
}
