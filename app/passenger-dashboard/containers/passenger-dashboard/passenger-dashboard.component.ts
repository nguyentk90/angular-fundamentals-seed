import { Passenger } from './../../models/passenger.interface';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
        <div>
            <h3>Airline Passengers</h3>
            <passenger-count [items]="passengers"></passenger-count>
            <passenger-detail *ngFor="let passenger of passengers;" [detail]="passenger" (remove)="handleRemove($event)" (edit)="handleEdit($event)"></passenger-detail>          
        </div>
    `
})
export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];

    handleRemove(event) {
        console.log(event);
    }

    handleEdit(event) {
        console.log(event);
    }

    ngOnInit() {
        this.passengers = [{
            id: 1,
            fullname: 'Stephen',
            checkedIn: true,
            checkInDate: 1490742000000,
            children: null
        }, {
            id: 2,
            fullname: 'Rose',
            checkedIn: false,
            checkInDate: null,
            children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 }]
        }, {
            id: 3,
            fullname: 'James',
            checkedIn: true,
            checkInDate: 1491606000000,
            children: null
        }, {
            id: 4,
            fullname: 'Louise',
            checkedIn: true,
            checkInDate: 1488412800000,
            children: [{ name: 'Jessica', age: 1 }]
        }, {
            id: 5,
            fullname: 'Tina',
            checkedIn: false,
            checkInDate: null,
            children: null
        }];
    }
}