import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pitch } from '../models/pitchInterface';


@Component({
  selector: 'app-pitch',
  templateUrl: './pitch.component.html',
  styleUrls: ['./pitch.component.css']
})
export class PitchComponent {
pitch : any ={};
pitches: any[] = [];
data: any;
 constructor(private http:HttpClient) {

 }

getPitch() {
  this.http.get('http://localhost:3000/pitch').subscribe(data => {
    this.pitch = data;
    console.log(data);});
  }
  addPitch(pitch: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = {
      name: pitch.name,
      address: pitch.address,
      format: pitch.format,
      price: pitch.price,
      city: pitch.city,
      num_players: pitch.num_players
    };
    this.http.post('http://localhost:3000/pitch', body, { headers }).subscribe(response => {
      console.log(response);
    });
  }}