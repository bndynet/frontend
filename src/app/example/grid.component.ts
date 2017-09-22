import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'example-grid',
  styleUrls: [],
  templateUrl: 'grid.component.html'
})
export class ExampleGridComponent implements OnInit {
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
