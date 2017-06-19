import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { AppNavbarComponent } from './navbar.component';
import { AppSidebarComponent } from './sidebar.component';
import { AppComingSoonComponent } from './comingsoon.component';

const coreRoutes: Routes = [
  { path: 'coming-soon', component: AppComingSoonComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(coreRoutes),

    SharedModule,
  ],
  declarations: [ AppNavbarComponent, AppSidebarComponent, AppComingSoonComponent ],
  exports:      [ AppNavbarComponent, AppSidebarComponent ],
  providers:    [ ]
})
export class CoreModule {}
