import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './Components/employee/employee.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  {path: 'employee', component:EmployeeComponent},
  {path: 'login', component:LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
