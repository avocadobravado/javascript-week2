import { Component } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';
import { Animal } from './animal.model';
import { AnimalComponent } from './animal-inventory.component'

 @Component({
   selector: 'app-root',
   template: `
        <div class="login">
          <input type="password" placeholder="Password" />
          <button type="button" (click)="login()">Employee Login</button>
        </div>
       <div class="container">
        <div class="employeePermission-wrapper">
        <!--New beer-->
        <new-animal  *ngIf="this.employeePermission === true" (newAnimalSender)="addAnimal($event)"></new-animal>
        <!--Edit beer-->
        <edit-animal  *ngIf="this.employeePermission === true" [childSelectedAnimal]="selectedAnimal"
        (decreaseButtonClickedSender)="decreasePints($event)"
        (increaseButtonClickedSender)="increasePints($event)"
        (popularClickedSender)="togglePopular($event)"
        (staffPickClickedSender)="toggleStaffPick($event)"
        (doneButtonClickedSender)="finishedEditing()"></edit-animal>
        </div>
        <!--Beer list-->
        <animal-list [parentEmployeePermission]="employeePermission" [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
        </div>

     `
 })

 export class AppComponent {
   selectedAnimal = null;
   employeePermission : boolean = false;

  masterAnimalList: Animal[] = [
    new Animal('POPULARONE', 'Name', 3, 'Diet', 'Location', 6, 'Female', 'Pickles', 'Warthogs', true),
    new Animal('Species2', 'Name', 3, 'Diet', 'Location', 6, 'Female', 'Pickles', 'Warthogs', false),
    new Animal('Species3', 'Name', 3, 'Diet', 'Location', 6, 'Female', 'Pickles', 'Warthogs', false),
    new Animal('Species4', 'Name', 3, 'Diet', 'Location', 6, 'Female', 'Pickles', 'Warthogs5', true),
    new Animal('Species', 'Name', 3, 'Diet', 'Location', 6, 'Female', 'Pickles', 'Warthogs6', false),
    new Animal('Species', 'Name', 3, 'Diet', 'Location', 6, 'Female', 'Pickles', 'Warthogs7', true),
    new Animal('Species', 'Name', 3, 'Diet', 'Location', 6, 'Female', 'Pickles', 'Warthogs8', false)
 ];

   // clickMessage = '';
   login() {
     if (this.employeePermission === false ) {
       this.employeePermission = true;
       console.log(this);
       console.log(this.employeePermission )
     } else {
       this.employeePermission = false;
     }
   }

   editAnimal(clickedAnimal) {
     this.selectedAnimal = clickedAnimal;
   }

   finishedEditing() {
     this.selectedAnimal = null;
   }

   addAnimal(newAnimalFromChild: Animal) {
     this.masterAnimalList.push(newAnimalFromChild);
   }

   decreasePints() {
    this.selectedAnimal.pints -= 1;
    if (this.selectedAnimal.pints <= 20) {
      this.selectedAnimal.priceColor = "bg-danger";
    } else if (this.selectedAnimal.pints <= 30){
      this.selectedAnimal.priceColor = "bg-warning";
    }
  }

   increasePints() {
     this.selectedAnimal.pints += 1;
     if (this.selectedAnimal.pints >= 31) {
       this.selectedAnimal.priceColor = "bg-success";
     } else if (this.selectedAnimal.pints >= 21){
       this.selectedAnimal.priceColor = "bg-warning";
     }
   }

   togglePopular(clickedAnimal: Animal) {
     if(clickedAnimal.popular === false) {
       clickedAnimal.popular = true;
       console.log('true popular');
     } else {
       clickedAnimal.popular = false;
       console.log('false popular');
     }
   }

   toggleStaffPick(clickedAnimal: Animal) {
     if(clickedAnimal.staffPick === false) {
       clickedAnimal.staffPick = true;
       console.log('true staffPick');
     } else {
       clickedAnimal.staffPick = false;
       console.log('false staffPick');
     }
   }
  }
