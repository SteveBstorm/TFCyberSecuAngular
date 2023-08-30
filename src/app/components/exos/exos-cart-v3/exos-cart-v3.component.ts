import { Component } from '@angular/core';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-exos-cart-v3',
  templateUrl: './exos-cart-v3.component.html',
  styleUrls: ['./exos-cart-v3.component.scss']
})
export class ExosCartV3Component {

  newArtName! : string
  newArtQty! : number

  constructor(private shoppingService : ShoppingService){}

  addToCart() {
    this.shoppingService.addToCart(this.newArtName, this.newArtQty)
  }
}
