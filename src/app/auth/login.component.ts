import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'authLogin',
  styleUrls: ['login.component.scss'],
  templateUrl: './login.component.html'
})

export class AuthLoginComponent implements OnInit {
  public model = { account: 'Bendy', password: '123456' };
  public isLoading: boolean = false;

  constructor(
    public route: ActivatedRoute
  ){ }

  public ngOnInit() { }

  public onLogin() {
      this.isLoading = !this.isLoading;
  }
}
