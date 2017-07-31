import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective implements OnChanges {
  @Input() appBorder = 1;

  constructor(private elementRef: ElementRef) { }

   ngOnChanges()
   {
     const style = `solid ${this.appBorder}px`;
     this.elementRef.nativeElement.style.border = style;
   }

}
