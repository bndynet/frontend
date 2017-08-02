import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

import { AppService } from '../app.service';

@Component({
    selector: 'example-md-table',
    styleUrls: ['./mdTable.component.scss'],
    templateUrl: './mdTable.component.html',
})
export class ExampleMdTableComponent implements OnInit {
    displayedColumns = ['title', 'content', 'createdAt'];
    exampleDatabase = new ExampleDatabase(this.appService);
    dataSource: ExampleDataSource | null;
    @ViewChild('filter') filter: ElementRef;

    constructor(
        private appService: AppService,
    ) {
    }

    ngOnInit() {
        this.dataSource = new ExampleDataSource(this.exampleDatabase);
        Observable.fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(() => {
                if (!this.dataSource) { return; }
                this.dataSource.filter = this.filter.nativeElement.value;
            });
    }
}

export interface UserData {
    title: string;
    content: string;
    createdAt: Date;
}

export class ExampleDatabase {
    dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
    get data(): UserData[] { return this.dataChange.value; }

    constructor(
        private appService: AppService,
    ) {
        this.appService.getArticles().then((res) => {
            this.dataChange.next(res);
        });
    }

    addArticle() {
        const copiedData = this.data.slice();
        copiedData.push(this.createNewArticle());
        this.dataChange.next(copiedData);
    }

    /** Builds and returns a new User. */
    private createNewArticle() {
        return {
            title: Math.random().toString(),
            content: Math.round(Math.random() * 100).toString(),
            createdAt: new Date(),
        };
    }
}


export class ExampleDataSource extends DataSource<any> {
    _filterChange = new BehaviorSubject('');
    get filter(): string { return this._filterChange.value; }
    set filter(filter: string) { this._filterChange.next(filter); }

    constructor(private _exampleDatabase: ExampleDatabase) {
        super();
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<UserData[]> {
        const displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._filterChange,
        ];

        return Observable.merge(...displayDataChanges).map(() => {
            return this._exampleDatabase.data.slice().filter((item: UserData) => {
                let searchStr = (item.title + item.content).toLowerCase();
                return searchStr.indexOf(this.filter.toLowerCase()) != -1;
            });
        });
    }

    disconnect() { }
}