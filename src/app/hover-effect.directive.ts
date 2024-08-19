import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]',
})
export class HoverEffectDirective {
  private originalBackgroundColor: string | null = null;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.originalBackgroundColor = this.el.nativeElement.style.backgroundColor;
    this.el.nativeElement.style.backgroundColor = 'lightblue';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = this.originalBackgroundColor;
  }
}
