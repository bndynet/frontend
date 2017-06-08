import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auth-login',
  styleUrls: ['login.component.scss'],
  templateUrl: 'login.component.html'
})

export class AuthLoginComponent implements OnInit {
  public model = { account: '', password: '' };
  public isLoading: boolean = false;

  constructor(
  ){ }

  public ngOnInit() { }

  public onLogin() {
      this.isLoading = !this.isLoading;
  }
}
