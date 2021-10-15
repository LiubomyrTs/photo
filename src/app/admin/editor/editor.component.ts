import { Component, OnInit, Output, EventEmitter, forwardRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EditorComponent),
      multi: true,
    }
  ]
})
export class EditorComponent implements OnInit, ControlValueAccessor {
  val = '';

  onChange: (data: any) => void;
  onTouched: () => void;

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
    plugins: "link, image, lists, tabfocus",
    toolbar: "image customInsertButton, numlist, bullist",
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

  constructor(
  ) {}

  set value(val) {
    if( val !== undefined && this.val !== val){
      this.val = val
      this.onChange(val)
      this.onTouched()
      }
  }

  ngOnInit(): void {
  }

  handleModelChange(v: any) {
    this.onChange(v);
  }

  handleModelTouched() {
    this.onTouched();
  }

  writeValue(value: any){ 
    this.value = value
  }

  registerOnChange(onChange: (data: any) => void) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: () => void) {
    console.log('registerOnTouched');
    this.onTouched = onTouched;
  }
}
