import { Component } from '@angular/core';
import { MdSnackBar, MdDialog } from '@angular/material';

import { AuthLogoutConfirmComponent } from './logoutConfirm.component';

@Component({
  selector: 'auth-logout',
  styleUrls: ['logout.component.scss'],
  templateUrl: 'logout.component.html',
})

export class AuthLogoutComponent {
  constructor(
    private dialog: MdDialog,
    private snackBar: MdSnackBar,
  ) { }

 public onLogout() {
    this.dialog.open(AuthLogoutConfirmComponent, {
    }).afterClosed().subscribe((res) => {
      const msg = res ? `Your choice: ${res}` : 'Nothing to do';
      this.snackBar.open(msg, '', {
        duration: 1500,
        extraClasses: ['success'],
      }).afterDismissed().subscribe(() => {
        console.debug('Snack bar has been closed!');
      });
    });
  }
}
