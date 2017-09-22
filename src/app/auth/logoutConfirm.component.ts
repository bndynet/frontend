import { Component } from '@angular/core';

@Component({
  selector: 'auth-logout-confirm',
  styles: [],
  template: `
    <h2 md-dialog-title>Sign Out</h2>
    <md-dialog-content>
      Are you sure you want to sign out?
    </md-dialog-content>
    <md-dialog-actions>
      <button md-raised-button md-dialog-close>No</button>
      <button md-raised-button class="danger" [md-dialog-close]="true">Yes</button>
    </md-dialog-actions>`,
})
export class AuthLogoutConfirmComponent {}
