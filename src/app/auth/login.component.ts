import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'auth-login',
  styleUrls: ['login.component.scss'],
  templateUrl: 'login.component.html'
})

export class AuthLoginComponent {
  public model = { account: '', password: '' };
  public isLoading: boolean = false;

  constructor(
    private appService: AppService,
  ) {
    this.appService.setPageTitle('Login', 'Switch User');
  }

  public onLogin() {
      this.isLoading = !this.isLoading;
  }
}
