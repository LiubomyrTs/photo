import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generated-content',
  templateUrl: './generated-content.component.html',
  styleUrls: ['./generated-content.component.scss']
})
export class GeneratedContentComponent implements OnInit {
  @Input() content: string = '';
  constructor() { }

  ngOnInit(): void {
  }
}
