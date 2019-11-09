import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {
  TagInputBasicComponent,
  TagInputValidationComponent,
  TagInputBasicNotRemovableItemsComponent,
  TagInputWithObjectsComponent
} from '../../components/chips/index.components';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic',
    pathMatch: 'full'
  },
  {
    path: 'basic',
    component: TagInputBasicComponent,
    data: { title: 'Basic' }
  },
  {
    path: 'with-not-removable-items',
    component: TagInputBasicNotRemovableItemsComponent,
    data: { title: 'With not removable items' }
  },
  {
    path: 'with-objects',
    component: TagInputWithObjectsComponent,
    data: { title: 'With objects' }
  },
  {
    path: 'validation',
    component: TagInputValidationComponent,
    data: { title: 'Validation' }
  },
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class ChipsRoutingModule { }
