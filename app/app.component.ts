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
        <img src="/resources/img/welcome.png" class="logo">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-sm-push-2">
              <h1 class="hero">Hello Explorers! We are excited for your next visit to <span class="name">Rose City Zoo</span>! Learn all about our animals before your visit.</h1>
            </div>
          </div>
        </div>
         <div class="container">
        <!--ANIMAL LIST-->
          <animal-list [parentEmployeePermission]="employeePermission" [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)">
          </animal-list>
        <!--ANIMAL LIST ENDS-->

        <!--FOOTER LAYOUT SECTION, edit in footer-layout.component-->
        <footer-layout></footer-layout>
        <!--FOOTER ENDS-->
        <div class="login">
          <button type="button" (click)="login()">TOP SECRET ADMIN ACCESS (no kids allowed)</button>
        </div>
        <!--NEW ANIMAL SECTION, will only appear if Admin Access button is clicked. Edit in new-animal.component -->
        <div class="employeePermission-wrapper">
          <new-animal  *ngIf="this.employeePermission === true" (newAnimalSender)="addAnimal($event)">
          </new-animal>
        <!--NEW ANIMAL ENDS-->

        <!--EDIT ANIMAL SECTION, will only appear if Admin Access button is clicked. Edit in edit-animal.component-->
          <edit-animal  *ngIf="this.employeePermission === true" [childSelectedAnimal]="selectedAnimal"
          (popularClickedSender)="togglePopular($event)"
          (doneButtonClickedSender)="finishedEditing()">
          </edit-animal>
        <!--EDIT ANIMAL SECTION ENDS-->
        </div><!--Employee permission wrapper closes-->
        </div><!--Container closes-->
     `
 })

 export class AppComponent {
   selectedAnimal = null;
   employeePermission : boolean = false;

  masterAnimalList: Animal[] = [
    // First animal
    new Animal('Hippo', 'Fiona', 0, 'Hay, Herbivore Pellets, and Lettuce', 'Castle', 16, 'Female', 'Baths, Cuddles, Naps', 'Loud sounds', 'Fiona loves to swim! An adult hippo can hold its breath underwater for up to 30 minutes.', true),

    // Second animal
    new Animal('Arctic Fox', 'Nymeria', 3, 'Lemmings, mice, and feline supplement 73', 'Winterfell', 2, 'Female', 'Playing with rope toys, sniffing the ground, snow', 'Birds, snakes, and fireworks', 'The arctic fox is able to pinpoint the exact location of prey that is under the snow.', false),

    // Third animal
    new Animal('Bactrian Camel', 'Cory', 10, 'Hay, pellets, grass, oats', 'Dune', 6, 'Male', 'Ear scratches, running, soothing sounds', 'Cats', 'Camels make a rumbling growl that was one of the noises used to create Chewbacca\'s voice in the Star Wars movies!', true),

    // Fourth animal
    new Animal('Lion', 'Lenny', 3, 'Ground beef, knucklebones, beef femurs, feline supplement 73', 'Casterly Rock', 11, 'Male', 'Hiding, sprinting, digging holes', 'Small children', 'Being king of the jungle. A lion can sleep up to 20 hours a day, so it is only awake for about 3 years of its life.', true),

    // Fifth animal
    new Animal('Dik dik', 'Tarly', 4, 'Foliage, berries, shoots', 'Dune', 4, 'Male', 'Back scratches, any type of fruit, wide open spaces for running', 'Enclosed spaces, being alone', 'Dik diks are small antelope weighing only 6 to 13 fully grown. Their common name may be an imitation of their alarm cry.', false),

    // Sixth animal
    new Animal('Seal', 'Sealie', 5, 'Fish', 'White Harbor', 6, 'Female', 'Slippery rocks, swimming, fish', 'Sharing food, penguins', 'A seal\'s eyes see well in dark murky waters, however, its highly sensitive ears are most important for locating prey.', true)
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

   togglePopular(clickedAnimal: Animal) {
     if(clickedAnimal.popular === false) {
       clickedAnimal.popular = true;
     } else {
       clickedAnimal.popular = false;
     }
   }
  }
