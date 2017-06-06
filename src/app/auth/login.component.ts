import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'authLogin',
  styleUrls: [],
  templateUrl: './login.component.html'
})

export class AuthLoginComponent implements OnInit {
  public model = { account: 'Bendy', password: '123456' };

  constructor(
    public route: ActivatedRoute
  ){ }

  public ngOnInit() { }

  public onLogin() { }
}
