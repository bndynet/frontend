import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'example-grid',
  styleUrls: [],
  templateUrl: 'grid.component.html'
})
export class ExampleGridComponent implements OnInit {
  data: any[];

  constructor(
    private appService: AppService,
  ) {
    console.debug('aa');
  }

  ngOnInit() {
    this.appService.getArticles().then(res => {
      this.data = res;
    });
  }
}
