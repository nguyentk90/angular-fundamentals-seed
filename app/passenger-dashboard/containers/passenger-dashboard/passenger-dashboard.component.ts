import { PassengerDashboardService } from './../../passenger-dashboard.service';
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

    constructor(private passengerDashboardService: PassengerDashboardService) {

    }

    handleRemove(event: Passenger) {
        this.passengerDashboardService.removePassengers(event)
            .subscribe((data) => {
                this.passengers = this.passengers.filter(item => item.id !== event.id);
            });
    }

    handleEdit(event: Passenger) {
        this.passengerDashboardService.updatePassengers(event)
            .subscribe((data) => {
                this.passengers = this.passengers.map(item => {
                    if (item.id === event.id) {
                        item = Object.assign({}, item, event);
                    }
                    return item;
                });
            });
    }

    ngOnInit() {
        this.passengerDashboardService.getPassengers().subscribe((data) => this.passengers = data);
    }
}