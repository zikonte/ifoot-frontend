import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PitchComponent } from './pitch/pitch.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AddPitchComponent } from './add-pitch/add-pitch.component';
import { MatCommonModule } from '@angular/material/core';
import { PitchListComponent } from './pitch-list/pitch-list.component';
import { ReservationComponent } from './reservation/reservation.component';
import { MakeResComponent } from './make-res/make-res.component';
import { EventcreationComponent } from './eventcreation/eventcreation.component';
import { ListeventsComponent } from './listevents/listevents.component';
import { ListusereveentComponent } from './listusereveent/listusereveent.component';
import { ListavialiableventsComponent } from './listavialiablevents/listavialiablevents.component';
import { ListeventsuserappliedforComponent } from './listeventsuserappliedfor/listeventsuserappliedfor.component';



@NgModule({
  declarations: [
    AppComponent,
    PitchComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AddPitchComponent,
    PitchListComponent,
    ReservationComponent,
    MakeResComponent,
    EventcreationComponent,
    ListeventsComponent,
    ListusereveentComponent,
    ListavialiableventsComponent,
    ListeventsuserappliedforComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatCommonModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
