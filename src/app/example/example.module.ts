import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MdListModule,
  MdTableModule,
  MdPaginatorModule,
  MdGridListModule,
  MdDatepickerModule,
  MdNativeDateModule,
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

import { SharedModule } from '../shared/shared.module';

import { ExampleFormComponent } from './form.component';
import { ExampleGridComponent } from './grid.component';
import { ExampleListComponent } from './list.component';
import { ExampleArticleComponent } from './article.component';
import { ExampleTableComponent } from './table.component';
import { ExampleTableCustomRenderColumnComponent } from './tableCustomRenderColumn.component';
import { ExampleMdTableComponent } from './mdTable.component';

const exampleRoutes: Routes = [
  { path: 'example-grid', component: ExampleGridComponent },
  { path: 'example-form', component: ExampleFormComponent },
  { path: 'example-article', component: ExampleArticleComponent },
  { path: 'example-list', component: ExampleListComponent },
  { path: 'example-table', component: ExampleTableComponent },
  { path: 'example-md-table', component: ExampleMdTableComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdListModule,
    MdGridListModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdTableModule,
    MdPaginatorModule,
    CdkTableModule,

    RouterModule.forChild(exampleRoutes),

    SharedModule,
  ],
  declarations: [
    ExampleArticleComponent,
    ExampleListComponent,
    ExampleGridComponent,
    ExampleFormComponent,
    ExampleTableComponent,
    ExampleMdTableComponent,
    ExampleTableCustomRenderColumnComponent,
  ],
  entryComponents: [
    ExampleTableCustomRenderColumnComponent,
  ],
})
export class ExampleModule {

}
