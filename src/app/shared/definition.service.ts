import { Injectable } from '@angular/core';

@Injectable()
export class DefinitionService {
  constructor(){
  }

  public getSmartTableSettings(columnsObject: any): any {
    return {
      actions: {
        position: 'right',
      },
      noDataMessage: 'No data found',
      selectMode: 'single', // single|multi
      columns: columnsObject,
      mode: 'inline', // 'external'|'inline'
      deleteConfirm: true,
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
}
