import { Routes } from '@angular/router';
import { AuthLoginComponent } from "./auth/login.component";
import { AuthLogoutComponent } from "./auth/logout.component";
import { NoContentComponent } from './core/no-content.component';

import { ExampleArticleComponent } from './example/article.component';
import { ExampleFormComponent } from './example/form.component';
import { ExampleGridComponent } from './example/grid.component';
import { ExampleListComponent } from './example/list.component';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: AuthLoginComponent },
  { path: 'logout', component: AuthLogoutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},

  { path: 'example-article', component: ExampleArticleComponent },
  { path: 'example-form', component: ExampleFormComponent },
  { path: 'example-grid', component: ExampleGridComponent },
  { path: 'example-list', component: ExampleListComponent },

  { path: '**', redirectTo: '/coming-soon', pathMatch: 'full' },
];
