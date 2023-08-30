import { Component } from '@angular/core';
import { AuthService } from '../demo/demo7/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [AuthService]
})
export class AboutComponent {

  isConnected! : boolean

  constructor(private authService : AuthService){
    this.isConnected = authService.isConnect
  }
}
