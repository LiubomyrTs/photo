import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ExperimentalService } from 'src/app/experimental.sevice';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  @Output()
  loaded = new EventEmitter();
  apiKey: string = 'kmyakb9f85t24p2hq3ks4oyha7l74crtdiev55jdwe7yjaid';
  init: Object = {
    content_style: `
      @font-face {
        font-family: 'Fira Sans';
        src: url('/assets/fonts/FiraSans-Regular.ttf') format('truetype');
        font-weight: 300; 
      }
      body, html {font-family: 'Fira Sans'!important;font-weight: 300;}
    `,
    height: '500',
    setup: function (editor) {
      editor.ui.registry.addButton('customInsertButton', {
        text: 'My Button',
        onAction: function (_) {
          // editor.insertContent('&nbsp;<strong>It\'s my button!</strong>&nbsp;' + EditorComponent.num);
        }
      });
    },
    placeholder: "write something here",
    plugins: "link, image",
    toolbar: "image customInsertButton",
    style_formats: [
      {
        title: "Image Left",
        selector: "img",
        styles: {
          float: "left",
          margin: "0 10px 0 10px",
        },
      },
      {
        title: "Image Right",
        selector: "img",
        styles: {
          float: "right",
          margin: "0 0 10px 10px",
        },
      },
    ],
  };

  form = this.fb.group({
    editor: '',
    numberOfPhotos: ''
  });

  constructor(
    private fb: FormBuilder,
    private experimentalService: ExperimentalService
  ) { }

  ngOnInit(): void {
    
  }

  handleSubmit() {
    const html = this.form.get('editor').value;
    this.experimentalService.save(html);
    this.loaded.emit('loaded');
  }
}
