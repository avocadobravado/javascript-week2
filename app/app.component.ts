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
    new Animal('Berlinerweisse', "pFriem", 3, 3.5),
    new Animal('White Dog IPA','El Segundo', 5, 6.9),
    new Animal('Kook - IIPA','Pizza Port', 5, 7.3),
    new Animal('Accumulated Knowledge','Modern Times', 6, 6.2),
    new Animal('Blanche de Chambly','Unibroue', 5, 5),
    new Animal('Luponic Distortion','Firestone Walker', 5, 5.9),
    new Animal('Edelwiss','Schneider', 6, 6.2),
    new Animal('Galaxy - White IPA w Brett', 'Anchorage', 4, 7),
    new Animal('Two Flowers - Hemp & CBD IPA','Coalition', 6, 6),
    new Animal('Urban Farmhouse','The Commons', 5, 5.3),
    new Animal('Handtruck - Pale','Barley Brown\'s', 7, 5.5)
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
