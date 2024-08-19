import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appOverdueHighlight]',
})
export class OverdueHighlightDirective implements OnInit {
  @Input() appOverdueHighlight: Date | null = null;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (
      this.appOverdueHighlight &&
      new Date(this.appOverdueHighlight) < new Date()
    ) {
      this.el.nativeElement.style.backgroundColor = 'red';
    }
  }
}
