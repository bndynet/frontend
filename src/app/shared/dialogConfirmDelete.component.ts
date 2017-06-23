import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'dialog-confirm-delete',
  styles: [],
  template: `<dialog-confirm [title]="title" [content]="content" btnYesClass="danger"></dialog-confirm>`,
})
export class DialogConfirmDeleteComponent {
  title: string;
  content: string;
  btnNo: string;
  btnYes: string;

  constructor(
    @Inject(MD_DIALOG_DATA) public data: any,
  ) {

    if(!data) data = {};

    this.title =  data.title || 'Delete';
    this.content = data.content || 'Are you sure you want to delete this item?';
    this.btnNo = data.btnNo || 'No';
    this.btnYes = data.btnYes || 'Yes';
  }
}
