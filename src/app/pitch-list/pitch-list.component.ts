import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pitch } from '../models/pitch.models';

@Component({
  selector: 'app-pitch-list',
  templateUrl: './pitch-list.component.html',
  styleUrls: ['./pitch-list.component.css']
})
export class PitchListComponent implements OnInit{
  pitch : any = {};
  pitches: any= [];
  data: any;
   constructor(private http:HttpClient) {
    
   }
   ngOnInit(): void {
    this.getPitch();
   }
  getPitch() {
    this.http.get<Pitch>('http://localhost:3000/pitch').subscribe(pitches => {
      this.pitches = pitches;
      console.log(pitches);});
    }
}
