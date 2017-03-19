import { PassengerDashboardService } from './passenger-dashboard.service';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        PassengerDashboardComponent
    ],
    declarations: [
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailComponent
    ],
    providers: [PassengerDashboardService]
})
export class PassengerDashboardModule { }