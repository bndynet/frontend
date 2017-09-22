import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

import 'bootstrap/dist/js/bootstrap.js';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class AppHeaderComponent implements OnInit {
  public menus: any[];

  constructor(
    private appService: AppService,
  ) {
  }

  public ngOnInit() {
    this.appService.getMainMenus().then((menus: any) => {
      this.menus = menus;
    });
  }
}
