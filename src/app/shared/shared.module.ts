import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MdButtonModule,
  MdIconModule,
  MdMenuModule,
  MdInputModule,
  MdProgressSpinnerModule,
  MdCardModule,
  MdDialogModule,
  MdAutocompleteModule,
  MdSnackBarModule,
  MdRadioModule,
  MdCheckboxModule,
} from '@angular/material';

import { SharedPageHeaderComponent } from './pageHeader.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  declarations: [
    SharedPageHeaderComponent,
  ],
  exports: [
    CommonModule,
    RouterModule,

    MdButtonModule,
    MdIconModule,
    MdMenuModule,
    MdCardModule,
    MdProgressSpinnerModule,
    MdInputModule,
    MdDialogModule,
    MdAutocompleteModule,
    MdSnackBarModule,
    MdRadioModule,
    MdCheckboxModule,

    SharedPageHeaderComponent,
  ],
  providers: [],
})
export class SharedModule {

}
