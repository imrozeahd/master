import { Component } from '@angular/core';

@Component({
   selector: 'textbox',
  template: `<input type="text"  [(ngModel)]="value" placeholder="{{placeholder}}" [disabled]="!enabled" />`,
inputs: [
    'placeholder',
    'mxlength',
    'enabled',
    'mandatory',
    'description',
    'type'],
})
export class textboxComponent {
 

  private placeholder: string;
    private mxlength: number;
    private enabled: boolean;
    private mandatory: boolean;
    private description: string;
    private type: string;
    /**
     *
     */
    constructor() {
      

    }
    

 }

