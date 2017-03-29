import { Passenger } from './../../models/passenger.interface';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'passenger-count',
    styleUrls: [],
    template: `
        <div>
           Total checked in: {{ checkedInCount() }}/{{ items?.length }}
        </div>
    `
})
export class PassengerCountComponent {
    @Input()
    items: Passenger[];

    checkedInCount(): number {
        if (!this.items) return;
        return this.items.filter(item => item.checkedIn).length;
    }
}