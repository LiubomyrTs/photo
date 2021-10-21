import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-info-card',
  templateUrl: './main-info-card.component.html',
})
export class MainInfoCardComponent implements OnInit {
  @Input() homeInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
