import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import {ArgAttributesComponent} from './arg-attributes/arg-attributes.component'
import { GeofeedComponent } from './geofeed/geofeed.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AdminComponent } from './admin/admin.component';
import { FlightsComponent } from './home-page/flights/flights.component';

const routes: Routes = [

  { path: 'Routes', component: HomePageComponent},
  { path: 'Flight-Info', component: ArgAttributesComponent },
  { path: 'Maps', component: GeofeedComponent},
  { path: 'Flights', component: MainPageComponent},
  { path: 'RecordLocator', component: AdminComponent},
  { path: 'FlightsAPI', component: FlightsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [FlightsComponent, ArgAttributesComponent, HomePageComponent, GeofeedComponent,MainPageComponent, AdminComponent]
