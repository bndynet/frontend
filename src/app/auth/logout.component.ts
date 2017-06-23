import { Component, OnInit } from '@angular/core';
import { MdSnackBar, MdDialog } from '@angular/material';

@Component({
  selector: 'auth-logout',
  styleUrls: ['logout.component.scss'],
  templateUrl: 'logout.component.html',
})

export class AuthLogoutComponent implements OnInit {
  constructor(
    private dialog: MdDialog,
    private snackBar: MdSnackBar,
  ){ }

  public ngOnInit() { }

  onLogout() {
    this.dialog.open(AuthLogoutConfirmComponent, {
    }).afterClosed().subscribe((res) => {
      const msg = res ? `Your choice: ${res}` : 'Nothing to do';
      this.snackBar.open(msg, '', {
        duration: 500,
        extraClasses: ['success'],
      }).afterDismissed().subscribe(()=>{
        console.debug('Snack bar has been closed!');
      });
    });
  }
}


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
export class AuthLogoutConfirmComponent implements OnInit {
  constructor(
  ) {

  }

  ngOnInit() {

  }
}
