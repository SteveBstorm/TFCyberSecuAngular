import { Component, EventEmitter, Output } from '@angular/core';
import { article } from './article';


@Component({
  selector: 'app-system-add-article',
  templateUrl: './system-add-article.component.html',
  styleUrls: ['./system-add-article.component.scss']
})
export class SystemAddArticleComponent {


  @Output() addArticleEvent : EventEmitter<article> = new EventEmitter<article>()


  newArtName : string = ""
  newArtQty : number = 0


  addToCart(){
    let article : article = {
      name : this.newArtName,
      qty : this.newArtQty
    }
    this.addArticleEvent.emit(article)
  }
}
