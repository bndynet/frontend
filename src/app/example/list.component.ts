import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'example-list',
  styleUrls: [],
  templateUrl: 'list.component.html'
})
export class ExampleListComponent implements OnInit {
  public data: any[];

  constructor(
    private appService: AppService,
  ) {
  }

  public ngOnInit() {
    this.appService.getArticles().then((res: any) => {
      this.data = res;
    });
  }
}
