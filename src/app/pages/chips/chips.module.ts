import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsRoutingModule } from './chips-routing.module';
import { TagInputModule } from 'ngx-chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  TagInputBasicComponent,
  TagInputValidationComponent,
  TagInputBasicNotRemovableItemsComponent,
  TagInputWithObjectsComponent
} from '../../components/chips/index.components';

@NgModule({
  declarations: [
    TagInputBasicComponent,
    TagInputValidationComponent,
    TagInputBasicNotRemovableItemsComponent,
    TagInputWithObjectsComponent
  ],
  imports: [
    CommonModule,
    ChipsRoutingModule,
    TagInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TagInputBasicComponent,
    TagInputValidationComponent,
    TagInputBasicNotRemovableItemsComponent,
    TagInputWithObjectsComponent
  ]
})
export class ChipsModule { }
