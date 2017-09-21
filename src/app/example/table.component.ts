import { Component, OnInit, Input } from '@angular/core';
import { MdDialogModule, MdDialogRef, MdDialog } from '@angular/material';
import { ViewCell } from "ng2-smart-table";

import { AppService } from '../app.service';
import { DefinitionService } from '../shared/definition.service';

import { DialogAlertComponent } from '../shared/dialogAlert.component';
import { DialogConfirmDeleteComponent } from '../shared/dialogConfirmDelete.component';

@Component({
  selector: 'example-table',
  styleUrls: [],
  templateUrl: './table.component.html',
})
export class ExampleTableComponent implements OnInit {
  settings: any;
  data: any[];

  constructor(
    private dialog: MdDialog,
    private appService: AppService,
    private definitionService: DefinitionService,
  ) {
    this.settings = definitionService.getSmartTableSettings({
        title: {
          title: 'Title',
          width: '30%',
        },
        content: {
          title: 'Content',
          width: '50%',
          type: 'custom',
          renderComponent: ExampleTableCustomRenderColumnComponent,
        },
        createdAt: {
          title: 'Created At',
          width: '120px',
          editable: false,
        },
      });
  }

  ngOnInit() {
    this.appService.getArticles().then((res: any) => {
      this.data = res;
    });
  }

  onDeleteConfirm(event): void {
    console.debug(event);
    let dialogConfirmRef = this.dialog.open(DialogConfirmDeleteComponent, {
      data: {
        title: 'Delete Confirmation',
        content: 'Do you want to delete?',
        btnYes: 'Yes',
        btnNo: 'No',
      },
    });
    dialogConfirmRef.afterClosed().subscribe((result) => {
      if(result) {
        event.confirm.resolve(true);
        console.info(`deleted: ${event.data.title}`);
        let dialogAlertRef = this.dialog.open(DialogAlertComponent, {
          data: {
            title: 'Deletion Result',
            content: 'Deleted Successfully',
            btn: 'OK, got it.'
          }
        });
        dialogAlertRef.afterClosed().subscribe(() => {
          console.info(`Alert Dialog Closed`);
          this.appService.success('Successful');
        });
      } else {
        event.confirm.reject(false);
        console.info('deletion canceled.')
        this.appService.info('Canceled');
      }
    });
  }
}


@Component({
  template: `
    <span>{{returnValue.substring(0, 50)}}...</span>
  `,
})
export class ExampleTableCustomRenderColumnComponent implements ViewCell, OnInit {
  returnValue: string;

  @Input() value: string;
  @Input() rowData: any;

  ngOnInit() {
    this.returnValue = this.value.toString();
  }
}
