import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './Routes-HomePage/home-page.component';
import { AdminComponent } from './RecordLocator/admin.component';

const routes: Routes = [

  { path: 'Routes', component: HomePageComponent},
  { path: 'RecordLocator', component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [HomePageComponent, AdminComponent]
