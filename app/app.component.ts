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
          (popularClickedSender)="togglePopular($event)"
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
    // First animal
    new Animal('Hippo', 'Fiona', 0, 'Hay, Herivore Pellets, and Lettuce', 'Location', 6, 'Female', 'Baths, Cuddles, Naps', 'Loud sounds', 'Fiona loves to swim! An adult hippo can hold its breath underwater for up to 30 minutes.', true),

    // Second animal
    new Animal('Arctic Fox', 'Nymeria', 3, 'Lemmings, mice, and feline supplement 73', 'Winterfell', 2, 'Female', 'Playing with rope toys, sniffing the ground, snow', 'Birds, snakes, and fireworks', 'The arctic fox is able to pinpoint the exact location of prey that is under the snow.', false),

    // Third animal
    new Animal('Bactrian Camel', 'Prince', 10, 'Hay, pellets, grass, oats', 'Dune', 6, 'Male', 'Ear scratches, running, soothing sounds', 'Cats', 'Camels make a rumbling growl that was one of the noises used to create Chewbacca\'s voice in the Star Wars movies!', true),

    // Fourth animal
    new Animal('Lion', 'Lenny', 3, 'Ground beef, knucklebones, beef femurs, feline supplement 73', 'Casterly Rock', 11, 'Male', 'Hiding, sprinting, digging holes', 'Small children', 'Being king of the jungle is tough work. A lion can sleep up to 20 hours a day, so it is only awake for about three years of its life.', true),

    // Fifth animal
    new Animal('Dik dik', 'Tarly', 4, 'Foliage, berries, shoots', 'Dune', 6, 'Male', 'Back scratches, any type of fruit, wide open spaces for running', 'Enclosed spaces, being alone', 'Dik diks are small antelope weighing only 6 to 13 fully grown. Their common name may be an imitation of their alarm cry.', false),

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
       console.log('true popular');
     } else {
       clickedAnimal.popular = false;
       console.log('false popular');
     }
   }
  }
