import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChipsComponent } from './pages/chips/chips.component';
import { ChipsRoutingModule } from './pages/chips/chips-routing.module';
import { ChipsModule } from './pages/chips/chips.module';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'chips',
    component: ChipsComponent,
    // loadChildren: './pages/chips/chips.module#ChipsModule'
    loadChildren: () => import('./pages/chips/chips.module').then(m => m.ChipsModule)
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    // ChipsRoutingModule
  ],
  exports: [
    RouterModule,
    /* HomeComponent,
    ChipsComponent */
  ]
})
export class AppRoutingModule { }
