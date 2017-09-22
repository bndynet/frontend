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
  MdTabsModule,
} from '@angular/material';

// services
import { DefinitionService } from './definition.service';

// shared components
import { SharedPageHeaderComponent } from './pageHeader.component';
import { DialogAlertComponent } from './dialogAlert.component';
import { DialogConfirmComponent } from './dialogConfirm.component';
import { DialogConfirmDeleteComponent } from './dialogConfirmDelete.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,

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
    MdTabsModule,
  ],
  declarations: [
    SharedPageHeaderComponent,
    DialogAlertComponent,
    DialogConfirmComponent,
    DialogConfirmDeleteComponent,
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
    MdTabsModule,

    SharedPageHeaderComponent,
  ],
  entryComponents: [
    DialogAlertComponent,
    DialogConfirmComponent,
    DialogConfirmDeleteComponent,
  ],
  providers: [
    DefinitionService,
  ],
})
export class SharedModule {}
