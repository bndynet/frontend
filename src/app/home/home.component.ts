import {
  Component,
} from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'home',
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(
    private appService: AppService) {

    this.appService.setPageTitle('Home');
  }
}
