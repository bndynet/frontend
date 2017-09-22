import { Component, OnInit, Input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  template: `
    <span>{{returnValue.substring(0, 50)}}...</span>
  `,
})
export class ExampleTableCustomRenderColumnComponent implements ViewCell, OnInit {

  @Input() public value: string;
  @Input() public rowData: any;

  public returnValue: string;

  public ngOnInit() {
    this.returnValue = this.value.toString();
  }
}
