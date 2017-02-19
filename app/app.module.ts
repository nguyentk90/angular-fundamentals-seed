import { StepComponent } from './wizard/step.component';
import { WizardComponent } from './wizard/wizard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  declarations:  [
    AppComponent,
    WizardComponent,
    StepComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}