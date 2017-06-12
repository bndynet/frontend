import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'example-list',
  styleUrls: [],
  templateUrl: 'list.component.html'
})
export class ExampleListComponent implements OnInit {
  data: any[];

  constructor(
    private appService: AppService,
  ) {
  }

  ngOnInit() {
    this.appService.getArticles().then(res => {
      this.data = res;
    });
  }
}
