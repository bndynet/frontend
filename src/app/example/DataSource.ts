import { MdPaginator } from '@angular/material';
import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { UserData } from './UserData';
import { ExampleDatabase } from './Database';

export class ExampleDataSource extends DataSource<any> {
  private filterChange = new BehaviorSubject('');
  get filter(): string { return this.filterChange.value; }
  set filter(filter: string) { this.filterChange.next(filter); }

  constructor(private exampleDatabase: ExampleDatabase, private paginator: MdPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  public connect(): Observable<UserData[]> {
    const displayDataChanges = [
      this.exampleDatabase.dataChange,
      this.filterChange,
      this.paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map((args: any) => {
      if (typeof args === 'string') {
        // this is an filter change and set the page to 1
        this.paginator.pageIndex = 0;
      }
      const data = this.exampleDatabase.data.slice().filter((item: UserData) => {
        const searchStr = (item.title + item.content).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
      });

      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    });
  }

  public disconnect(collectionViewer: CollectionViewer) {
    // nothing to do
  }
}
