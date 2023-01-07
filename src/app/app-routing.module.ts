import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPitchComponent } from './add-pitch/add-pitch.component';
import { AuthGuard } from './auth-guard.service';
import { EventcreationComponent } from './eventcreation/eventcreation.component';
import { HomeComponent } from './home/home.component';
import { ListavialiableventsComponent } from './listavialiablevents/listavialiablevents.component';
import { ListeventsComponent } from './listevents/listevents.component';
import { ListeventsuserappliedforComponent } from './listeventsuserappliedfor/listeventsuserappliedfor.component';
import { ListusereveentComponent } from './listusereveent/listusereveent.component';
import { LoginComponent } from './login/login.component';
import { MakeResComponent } from './make-res/make-res.component';
import { PitchListComponent } from './pitch-list/pitch-list.component';
import { PitchComponent } from './pitch/pitch.component';
import { RegisterComponent } from './register/register.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  {path: 'pitch', component: PitchComponent},
  {path: 'home', component: HomeComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'addpitch', component: AddPitchComponent},
  {path: 'listpitch', component: PitchListComponent},
  {path: 'pitch_res', component: ReservationComponent},
  {path: 'make_res', component: MakeResComponent},
  {path: 'createvent', component: EventcreationComponent},
  {path: 'listevnts', component: ListeventsComponent},
  {path: 'listuservent', component: ListusereveentComponent},
  {path: 'listavialiablevents', component: ListavialiableventsComponent},
  {path: 'listeventsuserappliedfor', component: ListeventsuserappliedforComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
