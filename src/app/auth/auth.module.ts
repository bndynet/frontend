import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { AuthLoginComponent } from './login.component';
import { AuthLogoutComponent, AuthLogoutConfirmComponent } from './logout.component';

const authRouters: Routes = [
  { path: 'login', component: AuthLoginComponent },
  { path: 'logout', component: AuthLogoutComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(authRouters),
    SharedModule,
  ],
  declarations: [
    AuthLoginComponent,
    AuthLogoutComponent,
    AuthLogoutConfirmComponent,
  ],
  entryComponents: [
    AuthLogoutConfirmComponent,
  ],
})
export class AuthModule {}

