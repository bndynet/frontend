import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {
  MdButtonModule,
  MdSelectModule,
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
  MdTooltipModule,
  MdSlideToggleModule,
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
    Ng2SmartTableModule,

    MdButtonModule,
    MdSelectModule,
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
    MdTooltipModule,
    MdSlideToggleModule,

    SharedPageHeaderComponent,
  ],
  providers: [],
})
export class SharedModule {

}
