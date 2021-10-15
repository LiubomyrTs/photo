import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Directive({
  selector: '[appServerSrc]'
})
export class ServerSrcDirective implements OnInit {
  @Input('appServerSrc') src: string;
  constructor(private el: ElementRef) { }
  serverUrl = environment.serverUrl;

  ngOnInit() {
    this.el.nativeElement.src = `${environment.serverUrl}${this.src}`;
  }
}
