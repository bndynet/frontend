/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
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
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'http://bndy.net';
  menus: any[];

  constructor(
    public appState: AppState,
    private appService: AppService,
  ) {}

  public ngOnInit() {
    this.appService.getSideMenus().then(menus => {
      this.menus = menus;
    });
  }

}
