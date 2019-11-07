import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { TagInputModule } from 'ngx-chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ChipsComponent } from './pages/chips/chips.component';
import { TagInputComponent } from './components/chips/tag-input/tag-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChipsComponent,
    TagInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TagInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
