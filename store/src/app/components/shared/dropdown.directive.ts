import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  //solo se oculta si se hace click en el elemento que contiene el directive
  /* @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  } */

  //se oculta haciendo click en cualquier parte del document
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elementRef: ElementRef) { }

}
