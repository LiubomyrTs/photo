import {Component, ElementRef, forwardRef, HostListener, OnInit, ViewChild, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import * as _ from 'lodash';

@Component({
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FileUploadComponent),
    multi: true
  }],
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements ControlValueAccessor, OnInit {
  @ViewChild('fileUpload', { static: true }) fileUpload: ElementRef<HTMLInputElement>;
  @Input() errorFileSizeMessage = 'The file you are trying to upload is too large.';
  @Input() errorFileExtensionMessage = 'The file format is not allowed.';
  @Input() errorFileNumberMessage = 'You exceed the allowed number of attachments.';
  @Input() allowedExtensions = ['png', 'jpeg', 'jpg'];
  @Input() dragzone: string;
  @Input() maxSize = 5242880;
  @Input() message: string;
  @Input() multiple = false;
  @Input() fileMaximumNumber: number;

  // BYTES_IN_MEGABYTE = BYTES_IN_MEGABYTE;

  // https://stackoverflow.com/a/21002544
  accessToken: string;
  dragOverCounter = 0;
  fileUploadError: string;
  fileUploadId: string;
  files: File[] = [];
  onChange: (data: any) => void;

  constructor(
    private elementRef: ElementRef,
  ) {}

  ngOnInit() {
    this.fileUploadId = _.uniqueId('file-upload-');
  }

  @HostListener('dragover', ['$event'])
  handleDragOver(e: any) {
    // Default browser handler has to be prevented for this event.
    // Otherwise browser will try to open a file once `drop` happens.
    e.preventDefault();
    e.stopPropagation();
  }

  @HostListener('dragenter', ['$event'])
  handleDragEnter(e: any) {
    e.preventDefault();
    e.stopPropagation();
    ++this.dragOverCounter;
  }

  @HostListener('dragleave', ['$event'])
  handleDragLeave(e: any) {
    e.preventDefault();
    e.stopPropagation();
    --this.dragOverCounter;
  }

  @HostListener('drop', ['$event'])
  handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    this.dragOverCounter = 0;
    this.handleFileDrop(e.dataTransfer.files);
  }

  get required() {
    return this.elementRef.nativeElement.hasAttribute('required');
  }

  handleFileDrop(files: FileList) {
    if (!files || !files.length) {
      return;
    }

    if ((this.files.length + files.length) > this.fileMaximumNumber) {
      this.fileUploadError = this.errorFileNumberMessage;
      return;
    }

    this.fileUploadError = null;

    for (let i = 0; i < files.length; ++i) {
      const file = files.item(i);

      if (file.size > this.maxSize) {
        this.fileUploadError = this.errorFileSizeMessage;
        return;
      }

      if (this.allowedExtensions.every((e: string) => !file.name.toLowerCase().endsWith(`.${e.toLowerCase()}`))) {
        this.fileUploadError = this.errorFileExtensionMessage;
        return;
      }
    }

    if (this.multiple) {
      this.files = this.files.concat(Array.from(files));
    } else {
      this.files = [files[0]];
    }

    this.emitFilesChanged();
  }

  handleFileDelete(index: number) {
    // Timeout is required to run this code after the previous event is finished
    setTimeout(() => {
      this.fileUpload.nativeElement.value = '';
      this.files.splice(index, 1);
      this.emitFilesChanged();
    }, 0);
  }

  emitFilesChanged() {
    if (!this.onChange) {
      return;
    }

    if (!this.multiple) {
      this.onChange(this.files[0]);
    } else {
      this.onChange(this.files);
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {}

  writeValue(files: any) {
    if (!files) {
      files = [];
    } else if (!Array.isArray(files)) {
      files = [files];
    }

    this.files = files;
  }
}
