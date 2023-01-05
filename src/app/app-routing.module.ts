import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPitchComponent } from './add-pitch/add-pitch.component';
import { AuthGuard } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PitchListComponent } from './pitch-list/pitch-list.component';
import { PitchComponent } from './pitch/pitch.component';
import { RegisterComponent } from './register/register.component';
import { RoleGuard } from './role-guard.service';

const routes: Routes = [
  {path: 'pitch', component: PitchComponent},
  {path: '', component: HomeComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent, canActivate: [RoleGuard]},
  {path: 'addpitch', component: AddPitchComponent},
  {path: 'listpitch', component: PitchListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
