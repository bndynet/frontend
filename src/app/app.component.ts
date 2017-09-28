/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import {
 Router, NavigationStart, NavigationEnd,
} from '@angular/router';
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
  public name = 'Frontend';
  public url = 'http://bndy.net';
  public isLoading: boolean = true;
  public isSidebarCollapsed: boolean = false;

  constructor(
    private router: Router,
    private appService: AppService,
  ) {
    this.router.events.forEach((event: any) => {
      if (event instanceof NavigationStart) {
        appService.setLoading(true);
      } else if (event instanceof NavigationEnd) {
        appService.setLoading(false);
      }
    }).then();
  }

  public ngOnInit() {
    this.appService.loadEvent.subscribe((value) => {
      this.isLoading = value;
    });

    setTimeout(() => {
      this.isLoading = false;
    }, 5000);
  }
}
