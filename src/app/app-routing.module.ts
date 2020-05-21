import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { DriverComponent } from './components/driver/driver.component';
import { ConstructorsComponent } from './components/constructors/constructors.component';
import { ConstructorComponent } from './components/constructor/constructor.component';
import { CircuitsComponent } from './components/circuits/circuits.component';
import { CircuitComponent } from './components/circuit/circuit.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'constructors', component: ConstructorsComponent },
  { path: 'circuits', component: CircuitsComponent },
  { path: 'driver/:id/nationality/:nationality/bdate/:bdate/name/:name', component: DriverComponent },
  { path: 'constructor/:id/name/:name', component: ConstructorComponent },
  { path: 'circuit/:id/name/:name/locality/:locality/country/:country', component: CircuitComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
