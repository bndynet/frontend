import { Component, Inject, Input } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'dialog-confirm',
  styles: [],
  template: `
<h2 md-dialog-title>{{title}}</h2>
<md-dialog-content>{{content}}</md-dialog-content>
<md-dialog-actions>
  <button md-button md-dialog-close>{{btnNo}}</button>
  <button md-button [ngClass]="btnYesClass" [md-dialog-close]="true">{{btnYes}}</button>
</md-dialog-actions>
`,
})
export class DialogConfirmComponent {
  @Input() public title: string;
  @Input() public content: string;
  @Input() public btnNo: string;
  @Input() public btnYes: string;
  @Input() public btnYesClass: string;

  constructor(
    @Inject(MD_DIALOG_DATA) private data: any,
  ) {

    if (!data) {
      data = {};
    }

    this.title =  data.title || 'No title';
    this.content = data.content || 'No content';
    this.btnNo = data.btnNo || 'No';
    this.btnYes = data.btnYes || 'Yes';
  }
}
