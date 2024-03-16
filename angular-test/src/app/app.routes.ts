import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AccesComponent } from './components/acces/acces.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'success', component: AccesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}