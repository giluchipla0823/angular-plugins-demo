import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsRoutingModule } from './chips-routing.module';
import { TagInputModule } from 'ngx-chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HighlightSearchPipe } from '../../pipes/highlight-search.pipe';

import {
  TagInputBasicComponent,
  TagInputValidationComponent,
  TagInputBasicNotRemovableItemsComponent,
  TagInputWithObjectsComponent,
  TagInputAutocompleteComponent
} from '../../components/chips/index.components';

@NgModule({
  declarations: [
    TagInputBasicComponent,
    TagInputValidationComponent,
    TagInputBasicNotRemovableItemsComponent,
    TagInputWithObjectsComponent,
    TagInputAutocompleteComponent,
    HighlightSearchPipe
  ],
  imports: [
    CommonModule,
    ChipsRoutingModule,
    TagInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    TagInputBasicComponent,
    TagInputValidationComponent,
    TagInputBasicNotRemovableItemsComponent,
    TagInputWithObjectsComponent,
    TagInputAutocompleteComponent
  ]
})
export class ChipsModule { }
