import { Component } from '@angular/core';

@Component({
  selector: 'auth-login',
  styleUrls: ['login.component.scss'],
  templateUrl: 'login.component.html'
})

export class AuthLoginComponent {
  public model = { account: '', password: '' };
  public isLoading: boolean = false;

  public onLogin() {
      this.isLoading = !this.isLoading;
  }
}
