import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component'

const homeRoutes: Routes = [
  { path: 'home',  component: HomeComponent },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(homeRoutes),
  ],
  declarations: [
    HomeComponent,
  ],
})
export class HomeModule {}
