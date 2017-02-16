import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h1 [innerHTML]="title"></h1>
      <div>
        {{numberOne + numberTwo}}
      </div>
      <div>
        {{isHappy ? ':)' : '('}}
      </div>
      <input type="text"
        [ngModel]="name"
        (ngModelChange)="handleChange($event)"
        (blur)="handleBlur($event)"
        (input)="handleInput($event)"
         />
      <div>{{name}}</div>
      <button (click)="handleClick($event)">Change name</button>
    </div>
  `
})
export class AppComponent {
  title: string;
  isHappy = true;
  numberOne: number = 1;
  numberTwo: number = 2;
  name: string = 'Nguyen';

  constructor() {
    this.title = 'Ultimate Angular'
  }

  handleChange(value: string) {
    console.log('Handle change...');
    this.name = value;
  }

  handleClick() {
    console.log('Handle click...');
    this.name = 'Tran';
  }

  handleBlur(event: any) {
    this.name = event.target.value; 
    console.log('Handle blur...');
  }

  handleInput(event: any) {
    console.log('Handle input...');
    this.name = event.target.value;
  }
}