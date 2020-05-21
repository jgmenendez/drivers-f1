import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { DriverComponent } from './components/driver/driver.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { ConstructorsComponent } from './components/constructors/constructors.component';
import { ConstructorComponent } from './components/constructor/constructor.component';
import { CircuitsComponent } from './components/circuits/circuits.component';
import { CircuitComponent } from './components/circuit/circuit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    DriverComponent,
    NoimagePipe,
    ConstructorsComponent,
    ConstructorComponent,
    CircuitsComponent,
    CircuitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
