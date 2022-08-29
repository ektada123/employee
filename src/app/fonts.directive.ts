import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFonts]'
})
export class FontsDirective {
 

  constructor( private el:ElementRef) { 
    el.nativeElement.style.color="red";
    el.nativeElement.style.background="green";
    
  }
  

}
