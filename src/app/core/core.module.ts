import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { AppNavbarComponent } from './navbar.component';
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
  declarations: [ AppNavbarComponent, AppComingSoonComponent ],
  exports:      [ AppNavbarComponent ],
  providers:    [ ]
})
export class CoreModule {}
