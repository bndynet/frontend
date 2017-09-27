import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { AppHeaderComponent } from './header.component';
import { AppSidebarComponent } from './sidebar.component';
import { AppNavsearchComponent } from './navsearch.component';
import { AppComingSoonComponent } from './comingsoon.component';

const coreRoutes: Routes = [
  { path: 'coming-soon', component: AppComingSoonComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(coreRoutes),

    SharedModule,
  ],
  declarations: [ AppHeaderComponent, AppSidebarComponent, AppNavsearchComponent, AppComingSoonComponent ],
  exports:      [ AppHeaderComponent, AppSidebarComponent, AppNavsearchComponent ],
  providers:    [ ]
})
export class CoreModule {}
