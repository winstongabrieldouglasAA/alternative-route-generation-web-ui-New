import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './Flight-Routes/home-page.component';
import { AdminComponent } from './RecordLocator/admin.component';
import { ArgAttributesComponent } from './Reroutings/arg-attributes.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatTableModule} from '@angular/material/table';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { MainPageComponent } from './Flight-Schedule/main-page.component';
import { FormsModule } from '@angular/forms';
import { FlightsComponent } from './Flight-Routes/flights/flights.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    routingComponents,//replaces the ArgAttributesComponent,MainPageComponent
    NavbarComponent,
    AdminSettingsComponent,
    FlightsComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatRadioModule,
    MatExpansionModule,
    MatTabsModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatButtonToggleModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
