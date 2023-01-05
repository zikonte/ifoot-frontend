import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-resrvation',
  templateUrl: './make-resrvation.component.html',
  styleUrls: ['./make-resrvation.component.css']
})
export class MakeResrvationComponent implements OnInit {
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  players=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  selectedDay!: string;
  selectedPlayer!: string;
  ngOnInit(): void {
    const d = document.getElementById('daysList')
    for (const day of this.days) {
      const option = document.createElement('option');
      option.value = day;
      option.text = day;
      
    }
    throw new Error('Method not implemented.');
  }
 
 
  
}