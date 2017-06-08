import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AuthLoginComponent } from "./auth/login.component";
import { NoContentComponent } from './no-content';

import { ExampleArticleComponent } from './example/article.component';
import { ExampleFormComponent } from './example/form.component';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'login', component: AuthLoginComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},

  { path: 'example-article', component: ExampleArticleComponent },
  { path: 'example-form', component: ExampleFormComponent },

  { path: '**',    component: NoContentComponent },
];
