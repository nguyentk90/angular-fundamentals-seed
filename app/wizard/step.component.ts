import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'step',
    template: `
        <div *ngIf="step.isCurrentStep">Step <ng-content></ng-content></div> `
})
export class StepComponent implements OnInit {
    @Input()
    steps: any[];

    @Input()
    first: boolean;

    step;

    constructor() {
        this.step = {
            isCurrentStep: false
        };
    }

    ngOnInit() {
        this.step.isCurrentStep = this.first;
        this.steps.push(this.step);
    }
}