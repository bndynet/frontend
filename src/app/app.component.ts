/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { AppService, AppState } from './app.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  templateUrl: './app.component.html',
  providers: [AppService],
})
export class AppComponent implements OnInit {
  public name = 'Angular 2 Webpack Starter';
  public url = 'http://bndy.net';
  menus: any[];
  isLoading: boolean = true;

  constructor(
    public appState: AppState,
    private appService: AppService,
  ) {}

  ngOnInit() {
    this.appService.loadEvent.subscribe((value) => {
      this.isLoading = value;
    });

    this.appService.getSideMenus().then(menus => {
      this.menus = menus;
    });

    setTimeout(() => {
      this.isLoading = false;
    }, 5000);
  }

  toggleMenu(menu: any): void {
    menu.isCollapsed = !menu.isCollapsed;
  }
}
