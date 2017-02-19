import { Component, OnInit, ContentChild, TemplateRef, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
    selector: 'wizard',
    template: `
        <div>
            <template [ngTemplateOutlet]="templateRef" [ngOutletContext]="{ $implicit: steps }"></template>
            <button (click)="back()">Back</button>
            <button (click)="next()">Next</button>
        </div>
    `
})
export class WizardComponent implements OnInit, AfterViewChecked, AfterViewInit {
    steps = [];
    currentIndexStep:number;
    @ContentChild(TemplateRef) templateRef: TemplateRef<any>;

    constructor() { 
        this.currentIndexStep = 0;
    }
    
    ngOnInit() {
        
    }

    ngAfterViewChecked() {
        console.log('after view checked');        
    }

    next() {
        this.steps[this.currentIndexStep].isCurrentStep = false;
        this.currentIndexStep++;
        this.steps[this.currentIndexStep].isCurrentStep = true;
    }

    back() {
        this.steps[this.currentIndexStep].isCurrentStep = false;
        this.currentIndexStep--;
        this.steps[this.currentIndexStep].isCurrentStep = true;
    }

    ngAfterViewInit() {
        console.log(this.steps);        
    }
}

/* usage:

<wizard>
        <template let-steps>
          <step [first]="true" [steps]="steps">1</step>
          <step [steps]="steps">2</step>
          <step [steps]="steps">3</step>
        </template>
      </wizard>

      <wizard>
        <template let-steps>
          <step [steps]="steps">4</step>
          <step [steps]="steps">5</step>
          
        </template>
      </wizard>
 */