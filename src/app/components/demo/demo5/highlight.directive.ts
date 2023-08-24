import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el : ElementRef) {
    console.log(el)
    this.el.nativeElement.style.color="grey"
    this.el.nativeElement.style.fontSize = "18px"
    this.el.nativeElement.style.backgroundColor="chartreuse"
  }

}
