import { Component } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';
import { Animal } from './animal.model';
import { AnimalComponent } from './animal-inventory.component'

 @Component({
   selector: 'app-root',
   template: `

        <!--NAV SECTION, go to nav-layout.component to edit-->
        <nav-layout></nav-layout>
        <!--END NAV SECTION-->

        <div class="login">
          <input type="password" placeholder="Password" />
          <button type="button" (click)="login()">Employee Login</button>
        </div>

       <div class="container">
        <!--NEW ANIMAL SECTION, will only appear if Admin Access button is clicked. Edit in new-animal.component -->
        <div class="employeePermission-wrapper">
          <new-animal  *ngIf="this.employeePermission === true" (newAnimalSender)="addAnimal($event)">
          </new-animal>
        <!--NEW ANIMAL ENDS-->

        <!--EDIT ANIMAL SECTION, will only appear if Admin Access button is clicked. Edit in edit-animal.component-->
          <edit-animal  *ngIf="this.employeePermission === true" [childSelectedAnimal]="selectedAnimal"
          (decreaseButtonClickedSender)="decreasePints($event)"
          (increaseButtonClickedSender)="increasePints($event)"
          (popularClickedSender)="togglePopular($event)"
          (staffPickClickedSender)="toggleStaffPick($event)"
          (doneButtonClickedSender)="finishedEditing()">
          </edit-animal>
        <!--EDIT ANIMAL SECTION ENDS-->
        </div><!--Employee permission wrapper closes-->

        <!--ANIMAL LIST-->
          <animal-list [parentEmployeePermission]="employeePermission" [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)">
          </animal-list>
        <!--ANIMAL LIST ENDS-->

        <!--FOOTER LAYOUT SECTION, edit in footer-layout.component-->
        <footer-layout></footer-layout>
        <!--FOOTER ENDS-->

        </div><!--Container closes-->

     `
 })

 export class AppComponent {
   selectedAnimal = null;
   employeePermission : boolean = false;

  masterAnimalList: Animal[] = [
    new Animal('Hippo', 'Fiona', 0, 'Hay, Herivore Pellets, and Lettuce', 'Location', 6, 'Female', 'Baths, Cuddles, Naps', 'Loud sounds', 'An adult hippo can hold its breath underwater for up to 30 minutes.', true),
    new Animal('Species2', 'Name', 3, 'Diet', 'Location', 6, 'Female', 'Pickles', 'Warthogs', 'funfact', false),
    new Animal('Species3', 'Name', 3, 'Diet', 'Location', 6, 'Female', 'Pickles', 'Warthogs', 'funfact', false),
    new Animal('Species4', 'Name', 3, 'Diet', 'Location', 6, 'Female', 'Pickles', 'Warthogs5', 'funfact', true),
    new Animal('Species', 'Name', 3, 'Diet', 'Location', 6, 'Female', 'Pickles', 'Warthogs6', 'funfact', false),
    new Animal('Species', 'Name', 3, 'Diet', 'Location', 6, 'Female', 'Pickles', 'Warthogs7', 'funfact', true)
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
