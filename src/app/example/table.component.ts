import { Component, OnInit, Input } from '@angular/core';
import { ViewCell } from "ng2-smart-table";

import { AppService } from '../app.service';
import { DefinitionService } from '../shared/definition.service';

@Component({
  selector: 'example-table',
  styleUrls: [],
  templateUrl: './table.component.html',
})
export class ExampleTableComponent implements OnInit {
  settings: any;
  data: any[];

  constructor(
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
    this.appService.getArticles().then((res) => {
      this.data = res;
    });
  }

  onDeleteConfirm(event): void {
    console.debug(event);
    if(confirm('Are you sure you want to delete this item?')){
      event.confirm.resolve(true);
      console.info(`deleted: ${event.data.title}`);
      return;
    }
    event.confirm.reject(false);
    console.info('deletion canceled.')
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
