import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class HomeDashboardComponent {

  constructor(
    private appService: AppService) {

    this.appService.setPageTitle('Dashboard');
  }
}
