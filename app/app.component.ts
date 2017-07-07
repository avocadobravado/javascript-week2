import { Component } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';
import { Animal } from './animal.model';
import { AnimalComponent } from './animal-database.component'

 @Component({
   selector: 'app-root',
   template: `
        <div class="login">
          <input type="password" placeholder="Password" />
          <button type="button" (click)="login()">Employee Login</button>
        </div>
       <div class="container">
        <div class="employeePermission-wrapper">
        <!--New animal-->

        <new-animal  *ngIf="this.employeePermission === true" (newAnimalSender)="addAnimal($event)"></new-animal>

        <!--Edit animal-->
        <edit-animal  *ngIf="this.employeePermission === true" [childselectedAnimal]="selectedAnimal"
        (doneButtonClickedSender)="finishedEditing()"></edit-animal>
        </div>

        <!--Animal database-->
        <animal-database [parentEmployeePermission]="employeePermission" [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-database>
        </div>

     `
 })
// In edit-beer
 // (decreaseButtonClickedSender)="decreasePints($event)"
 // (increaseButtonClickedSender)="increasePints($event)"
 // (popularClickedSender)="togglePopular($event)"
 // (staffPickClickedSender)="toggleStaffPick($event)"

 export class AppComponent {
   selectedAnimal = null;
   employeePermission : boolean = false;

  masterAnimalList: Animal[] = [
    new Animal('Animal', 'Name', 1, 'Diet', 'Location', 3, 'Likes', 'Dislikes'),
    new Animal('Animal', 'Name', 1, 'Diet', 'Location', 3, 'Likes', 'Dislikes'),
    new Animal('Animal', 'Name', 1, 'Diet', 'Location', 3, 'Likes', 'Dislikes')
 ];

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

  //  decreasePints() {
  //   this.selectedAnimal.pints -= 1;
  //   if (this.selectedAnimal.pints <= 20) {
  //     this.selectedAnimal.priceColor = "bg-danger";
  //   } else if (this.selectedAnimal.pints <= 30){
  //     this.selectedAnimal.priceColor = "bg-warning";
  //   }
  // }
  //
  //  increasePints() {
  //    this.selectedAnimal.pints += 1;
  //    if (this.selectedAnimal.pints >= 31) {
  //      this.selectedAnimal.priceColor = "bg-success";
  //    } else if (this.selectedAnimal.pints >= 21){
  //      this.selectedAnimal.priceColor = "bg-warning";
  //    }
  //  }

/////////////////
// Pipe stuff //
///////////////

  //  togglePopular(clickedBeer: Beer) {
  //    if(clickedBeer.popular === false) {
  //      clickedBeer.popular = true;
  //      console.log('true popular');
  //    } else {
  //      clickedBeer.popular = false;
  //      console.log('false popular');
  //    }
  //  }
  //
  //  toggleStaffPick(clickedBeer: Beer) {
  //    if(clickedBeer.staffPick === false) {
  //      clickedBeer.staffPick = true;
  //      console.log('true staffPick');
  //    } else {
  //      clickedBeer.staffPick = false;
  //      console.log('false staffPick');
  //    }
  //  }
  // }
