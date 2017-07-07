import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from './app.component'
import { Animal } from './animal.model';


@Component({
  selector: 'animal-list',
  template: `

  <!--SELECT MENU-->
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="showMostPopular">Show Explorer Favorites</option>
      <option value="showAll" selected="selected">Show All Animals</option>
    </select>

    <div class={{currentAnimal.priceColor}} *ngFor="let currentAnimal of childAnimalList | filter:filterByChoice">

    <!--CARD CONTAINER-->
      <div class="card col-xs-12 col-sm-12 col-md-6">
        <div class="card-title">
        <!--ANIMAL SPECIES AND POPULARITY-->
         <h4>{{currentAnimal.species}}
         <span *ngIf="currentAnimal.popular === true">- Explorer Favorite!</span>
         </h4>
       </div>
       <div class="card-content">
         <!--ANIMAL INFO-->
         <p><strong>Name: </strong>{{currentAnimal.name}}</p>
         <p><strong>Age: </strong>{{currentAnimal.age}} years old</p>
         <p><strong>Loves to eat: </strong>{{currentAnimal.diet}}</p>
         <p><strong>Resides in: </strong>{{currentAnimal.location}}</p>
         <p><strong>Daily caretakers: </strong>{{currentAnimal.caretakers}}</p>
         <p><strong>Sex: </strong>{{currentAnimal.sex}}</p>
         <p><strong>Likes: </strong>{{currentAnimal.likes}}</p>
         <p><strong>Dislikes: </strong>{{currentAnimal.dislikes}}</p>
         <p><strong>Fun fact: </strong>{{currentAnimal.funFact}}</p>
         <!--EDIT BUTTON-->
         <a href="#edit-animal-wrapper"><button  *ngIf="parentEmployeePermission === true" (click)="editButtonHasBeenClicked(currentAnimal)" class="edit-animal-button">Edit!</button></a>
       </div><!--Card content closes-->
      </div><!--Card closes-->
    </div><!--Main div closes-->
  `
})

export class AnimalComponent {
  @Input() childAnimalList: Animal[];
  @Input() parentEmployeePermission : boolean;
  @Output() clickSender = new EventEmitter();

  filterByChoice: string = "showAll";

  onChange(optionFromMenu) {
    this.filterByChoice = optionFromMenu;
    console.log(this.filterByChoice);
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
