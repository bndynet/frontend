import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AuthLoginComponent } from "./auth/login.component";
import { AuthLogoutComponent } from "./auth/logout.component";
import { NoContentComponent } from './no-content';

import { ExampleArticleComponent } from './example/article.component';
import { ExampleFormComponent } from './example/form.component';
import { ExampleGridComponent } from './example/grid.component';
import { ExampleListComponent } from './example/list.component';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'login', component: AuthLoginComponent },
  { path: 'logout', component: AuthLogoutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},

  { path: 'example-article', component: ExampleArticleComponent },
  { path: 'example-form', component: ExampleFormComponent },
  { path: 'example-grid', component: ExampleGridComponent },
  { path: 'example-list', component: ExampleListComponent },

  { path: '**',    component: NoContentComponent },
];
