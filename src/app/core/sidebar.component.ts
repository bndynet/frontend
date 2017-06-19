import { Component, AfterViewInit } from '@angular/core';
import { AppService } from '../app.service';

import 'jquery';
import 'metismenu';

@Component({
  selector: 'app-sidebar',
  styleUrls: ['./sidebar.component.scss'],
  templateUrl: './sidebar.component.html',
})

export class AppSidebarComponent implements AfterViewInit {
  menus: any[];

  constructor(
    private appService: AppService,
  ) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      $('.metismenu').metisMenu();
    });
  }

  ngOnInit () {
    this.appService.getSideMenus().then(menus => {
      this.menus = menus;
    });
  }

  toggleMenu(menu: any): void {
    menu.isCollapsed = !menu.isCollapsed;
  }
}
