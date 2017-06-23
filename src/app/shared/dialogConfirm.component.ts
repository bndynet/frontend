import { Component, Inject, Input } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'dialog-confirm',
  styles: [],
  template: `
<h2 md-dialog-title>{{title}}</h2>
<md-dialog-content>{{content}}</md-dialog-content>
<md-dialog-actions>
  <button md-raised-button md-dialog-close>{{btnNo}}</button>
  <button md-raised-button [ngClass]="btnYesClass" [md-dialog-close]="true">{{btnYes}}</button>
</md-dialog-actions>
`,
})
export class DialogConfirmComponent {
  @Input() title: string;
  @Input() content: string;
  @Input() btnNo: string;
  @Input() btnYes: string;
  @Input() btnYesClass: string;

  constructor(
    @Inject(MD_DIALOG_DATA) public data: any,
  ) {

    if(!data) data = {};

    this.title =  data.title || 'No title';
    this.content = data.content || 'No content';
    this.btnNo = data.btnNo || 'No';
    this.btnYes = data.btnYes || 'Yes';
  }
}
