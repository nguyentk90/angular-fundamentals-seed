import { Component } from '@angular/core';

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;" [style.backgroundColor]="'red'">
        <span class="status" 
        [ngClass]="{ 'checked-in': passenger.checkedIn,
    'checked-out': !passenger.checkedOut  
     }"
        ></span>
          {{ i }}: {{ passenger.fullname }}
        </li>
      </ul>
      <button (click)="update()">update</button>

      
    </div>
  `
})
export class AppComponent {
  update() {
    this.passengers[0].checkedIn = !this.passengers[0].checkedIn;
  }

  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true
  }, {
    id: 4,
    fullname: 'Louise',
    checkedIn: true
  }, {
    id: 5,
    fullname: 'Tina',
    checkedIn: false
  }];
}