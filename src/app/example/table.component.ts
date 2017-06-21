import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';
import { ViewCell } from "ng2-smart-table";

@Component({
  selector: 'example-table',
  styleUrls: [],
  templateUrl: './table.component.html',
})
export class ExampleTableComponent implements OnInit {
  settings: any;
  data: any[];

  constructor(private appService: AppService,) {
    this.settings = {
      actions: {
        position: 'right',
      },
      columns: {
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
        },
      },
      add: {
        addButtonContent: `<i class="fa fa-plus"></i> Add New`,
        createButtonContent: `<i class="fa fa-save"></i>`,
        cancelButtonContent: `<i class="fa fa-undo"></i>`,
      },
      edit: {
        editButtonContent: `<i class="fa fa-edit"></i>`,
        saveButtonContent: `<i class="fa fa-save"></i>`,
        cancelButtonContent: `<i class="fa fa-undo"></i>`,
      },
      delete: {
        deleteButtonContent: `<i class="fa fa-trash"></i>`,
        confirmDelete: true,
      },
    };
  }

  ngOnInit() {
    this.appService.getArticles().then((res) => {
      this.data = res;
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
