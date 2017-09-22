import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'dialog-alert',
  template: `
<h2 md-dialog-title>{{title}}</h2>
<md-dialog-content>{{content}}</md-dialog-content>
<md-dialog-actions>
  <button md-button [md-dialog-close]="true">{{btn}}</button>
</md-dialog-actions>
`,
})
export class DialogAlertComponent {
  public title: string;
  public content: string;
  public btn: string;

  constructor(
    @Inject(MD_DIALOG_DATA) private data: any,
  ) {
    if (!data) {
      data = {};
    }

    this.btn = data.btn || 'OK';
    this.title = data.title || 'No title';
    this.content = data.content || `
    Please use the following code to set title and content.
    dialog.open(DialogComponentType, { data: {title: '', content: ''} });
`;
  }
}
