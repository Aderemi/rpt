import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInput]'
})
export class InputDirective {

  constructor(private el: ElementRef, private rend: Renderer2) {
    rend.addClass(el.nativeElement, 'form-control');
  }

}
