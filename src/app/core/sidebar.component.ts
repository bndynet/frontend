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

  constructor(
    private appService: AppService,
  ) {
  }

  public ngAfterViewInit() {
    setTimeout(() => {
      $('.metismenu').metisMenu();
    }, 1000);
  }

  public ngOnInit() {
    this.menus = this.appService.getSideMenus();
  }

  public toggleMenu(menu: any): void {
    menu.isCollapsed = !menu.isCollapsed;
  }
}
