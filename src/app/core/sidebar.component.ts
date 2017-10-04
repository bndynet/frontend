import { Component, AfterViewInit, OnInit } from '@angular/core';
import { AppService } from '../app.service';

import 'jquery';
import 'metismenu';

@Component({
  selector: 'app-sidebar',
  styleUrls: ['./sidebar.component.scss'],
  templateUrl: './sidebar.component.html',
})
export class AppSidebarComponent implements AfterViewInit, OnInit {
  public menus: any[];
  public daysStatus: any[] = [];

  constructor(
    private appService: AppService,
  ) {
    for (let i = 7; i > 0; i--) {
      this.daysStatus.push({
        date: new Date().setDate(new Date().getDate() - i),
        status: i % 3 === 0 || i === 1,
      });
    }
  }

  public ngAfterViewInit() {
    setTimeout(() => {
      $('.metismenu').metisMenu();
    });
  }

  public ngOnInit() {
    this.menus = this.appService.getSideMenus();
  }
}
