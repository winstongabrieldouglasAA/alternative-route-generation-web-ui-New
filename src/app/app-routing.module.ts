import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './Flight-Routes/home-page.component';
import {ArgAttributesComponent} from './Reroutings/arg-attributes.component'
import { AdminComponent } from './RecordLocator/admin.component';
import { FlightsComponent } from './Flight-Routes/flights/flights.component';

const routes: Routes = [

  { path: 'Routes', component: HomePageComponent},
  { path: 'Flight-Info', component: ArgAttributesComponent },
  { path: 'RecordLocator', component: AdminComponent},
  { path: 'FlightsAPI', component: FlightsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [FlightsComponent, ArgAttributesComponent, HomePageComponent, AdminComponent]
