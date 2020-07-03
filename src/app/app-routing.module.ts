import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FilterVehiclesComponent } from './components/filter-vehicles/filter-vehicles.component';


const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: '', component: FilterVehiclesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
