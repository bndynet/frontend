import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component'
import { HomeDashboardComponent } from './dashboard.component';

const homeRoutes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'dashboard', component: HomeDashboardComponent },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(homeRoutes),
  ],
  declarations: [
    HomeComponent,
    HomeDashboardComponent,
  ],
})
export class HomeModule {}
