import { Component } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
    selector: 'my-test',
    template: `
             
                <div><input #nameTextbox type='text' placeholder='enter your name' [ngClass]="nameClass" (keyup)="validateName(nameTextbox.value)" /></div>
                <div><input #agreeCheckbox type='checkbox' [disabled]="!validName" (change)="setAgreed(agreeCheckbox.checked)" />I agree to ....</div>
                <input type='submit' value="Submit" [disabled]="!agreed" (click)="submit(nameTextbox.value)" />
             
              `,
    styles: [`
                .bad {
                   background-color: red;
                }
                .good {
                   background-color: green;
                }
           `],
  directives: [NgClass]

})

export class testComponent { 
    public validName: boolean;
    public nameClass: string;
    public agreed: boolean;
    validateName(name) {
        if (name.length > 2) {
            this.validName = true;
            this.nameClass = "good";
        } else {
            this.validName = false;
            this.nameClass = "bad";
        }
    }
    setAgreed(agree) {
        this.agreed = agree;
    }
    submit(name) {
        console.log(name);
    }
}
