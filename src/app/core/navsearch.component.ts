import { Component } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-navsearch',
  styleUrls: ['./navsearch.component.scss'],
  templateUrl: './navsearch.component.html',
})
export class AppNavsearchComponent {
  public keywords: string;

  constructor(private appService: AppService) {

  }

  public onSearch(event: Event) {
    if (this.keywords) {
      this.appService.search(this.keywords);
    } else {
      event.preventDefault();
    }
  }
}
