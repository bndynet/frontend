import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

import { AppService } from '../app.service';
import { DefinitionService } from '../shared/definition.service';

import { AppDatePipe } from '../shared/pipes/appDate';

import { DialogAlertComponent } from '../shared/dialogAlert.component';
import { DialogConfirmDeleteComponent } from '../shared/dialogConfirmDelete.component';
import { ExampleTableCustomRenderColumnComponent } from './tableCustomRenderColumn.component';

@Component({
  selector: 'example-table',
  styleUrls: [],
  templateUrl: './table.component.html',
})
export class ExampleTableComponent implements OnInit {
  public settings: any;
  public data: any[];

  constructor(private dialog: MdDialog,
              private appService: AppService,
              private appDate: AppDatePipe,
              private definitionService: DefinitionService,
  ) {
    this.appService.setPageTitle('Table', 'ng2-smart-table');
    this.settings = definitionService.getSmartTableSettings({
      title: {
        title: 'Title',
        width: '30%',
      },
      content: {
        title: 'Content',
        width: '45%',
        type: 'custom',
        renderComponent: ExampleTableCustomRenderColumnComponent,
      },
      createdAt: {
        title: 'Created At',
        width: '160px',
        editable: false,
        valuePrepareFunction: (val: any) => {
          return this.appDate.transform(val);
        },
      },
    });
  }

  public ngOnInit() {
    this.appService.getArticles().then((res: any) => {
      this.data = res;
    });
  }

  public onDeleteConfirm(event): void {
    console.debug(event);
    const dialogConfirmRef = this.dialog.open(DialogConfirmDeleteComponent, {
      data: {
        title: 'Delete Confirmation',
        content: 'Do you want to delete?',
        btnYes: 'Yes',
        btnNo: 'No',
      },
    });
    dialogConfirmRef.afterClosed().subscribe((result) => {
      if (result) {
        event.confirm.resolve(true);
        console.info(`deleted: ${event.data.title}`);
        const dialogAlertRef = this.dialog.open(DialogAlertComponent, {
          data: {
            title: 'Deletion Result',
            content: 'Deleted Successfully',
            btn: 'OK, got it.',
          },
        });
        dialogAlertRef.afterClosed().subscribe(() => {
          console.info(`Alert Dialog Closed`);
          this.appService.success('Successful');
        });
      } else {
        event.confirm.reject(false);
        console.info('deletion canceled.');
        this.appService.info('Canceled');
      }
    });
  }
}
