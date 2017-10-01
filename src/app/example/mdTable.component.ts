import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MdPaginator } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

import { AppService } from '../app.service';
import { ExampleDatabase } from './Database';
import { ExampleDataSource } from './DataSource';

@Component({
  selector: 'example-md-table',
  styleUrls: ['./mdTable.component.scss'],
  templateUrl: './mdTable.component.html',
})
export class ExampleMdTableComponent implements OnInit {
  public displayedColumns = ['title', 'content', 'createdAt'];
  public exampleDatabase = new ExampleDatabase(this.appService);
  public dataSource: ExampleDataSource | null;

  @ViewChild(MdPaginator) private paginator: MdPaginator;
  @ViewChild('filter') private filter: ElementRef;

  constructor(private appService: AppService,) {
    this.appService.setPageTitle('Table', 'Material Table');
  }

  public ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }
}
