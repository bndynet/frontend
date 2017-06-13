import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MdListModule,
  MdGridListModule,
  MdDatepickerModule,
  MdNativeDateModule
} from '@angular/material';

import { SharedModule } from '../shared/shared.module';

import { ExampleFormComponent } from './form.component';
import { ExampleGridComponent } from './grid.component';
import { ExampleListComponent } from './list.component';
import { ExampleArticleComponent } from './article.component';

const exampleRoutes: Routes = [
  { path: 'example-grid', component: ExampleGridComponent },
  { path: 'example-form', component: ExampleFormComponent },
  { path: 'example-article', component: ExampleArticleComponent },
  { path: 'example-list', component: ExampleListComponent },
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
    RouterModule.forChild(exampleRoutes),

    SharedModule,
  ],
  declarations: [
    ExampleArticleComponent,
    ExampleListComponent,
    ExampleGridComponent,
    ExampleFormComponent,
  ],
})
export class ExampleModule {

}
