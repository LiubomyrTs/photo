import { Directive, ElementRef, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { environment } from 'src/environments/environment';

@Directive({
  selector: '[appServerSrc]'
})
export class ServerSrcDirective implements OnChanges {
  @Input('appServerSrc') src: string;
  constructor(private el: ElementRef) { }
  serverUrl = environment.serverUrl;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.src) {
      this.el.nativeElement.src = `${environment.serverUrl}${this.src}`;
    }
  }
}
