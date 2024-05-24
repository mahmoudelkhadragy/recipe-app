import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  get dropDownMenuElement() {
    return this.elementRef.nativeElement.querySelector('.dropdown-menu');
  }
  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  @HostListener('click', ['$event']) onClick(event: Event) {
    if (!this.dropDownMenuElement.contains(event.target as Node)) {
      this.dropDownMenuElement.classList.contains('show')
        ? this.renderer2.removeClass(this.dropDownMenuElement, 'show')
        : this.renderer2.addClass(this.dropDownMenuElement, 'show');
    }
  }

  @HostListener('document:click', ['$event'])
  toggleOpen(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target as Node)) {
      this.renderer2.removeClass(this.dropDownMenuElement, 'show');
    }
  }
}
