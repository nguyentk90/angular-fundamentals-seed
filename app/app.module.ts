import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    PassengerDashboardModule
  ],
  declarations:  [
    AppComponent   
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}