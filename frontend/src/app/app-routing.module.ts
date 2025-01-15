import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { GestionAssignementsComponent } from './gestion-assignements/gestion-assignements.component';
import { GestionEmployeeComponent } from './gestion-employee/gestion-employee.component';
import { GestionMaterialComponent } from './gestion-material/gestion-material.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'gestion-employee', component : GestionEmployeeComponent, canActivate: [AuthGuard]},
  {path: 'gestion-material', component : GestionMaterialComponent, canActivate: [AuthGuard]},
  {path: 'gestion-assignements', component : GestionAssignementsComponent, canActivate: [AuthGuard]},
  {path: 'login', component : LoginComponent},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
