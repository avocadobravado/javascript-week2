import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from './app.component'
import { Animal } from './animal.model';


@Component({
  selector: 'animal-list',
  template: `

      <select (change)="onChange($event.target.value)" class="filter">
        <option value="showMostPopular">Show Explorer Favorites</option>
        <option value="showAll" selected="selected">Show All</option>
      </select>

     <div class={{currentAnimal.priceColor}} *ngFor="let currentAnimal of childAnimalList | filter:filterByChoice">
    <div class="card col-xs-12 col-sm-12 col-md-6">
     <div class="card-block">
       <div class="card-title">
        <!--ANIMAL SPECIES AND POPULARITY-->
         <p>{{currentAnimal.species}} -
         <span *ngIf="currentAnimal.popular === true">Explorer Favorite!</span>
         </p>
       </div>
         <p>{{currentAnimal.name}}</p>
         <p><span [style.color]="abvColor(currentAnimal)">{{currentAnimal.age}} years old</span></p>
         <p>{{currentAnimal.diet}}</p>
         <p>{{currentAnimal.location}}</p>
         <p>{{currentAnimal.caretakers}}</p>
         <p>{{currentAnimal.sex}}</p>
         <p>{{currentAnimal.likes}}</p>
         <p>{{currentAnimal.dislikes}}</p>
         <p>{{currentAnimal.funFact}}</p>
       <a href="#edit-animal-wrapper"><button  *ngIf="parentEmployeePermission === true" (click)="editButtonHasBeenClicked(currentAnimal)" class="edit-animal-button">Edit!</button></a>
      </div>
      </div>
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

  abvColor(animal: Animal) {
    if (animal.age <= 5.5) {
    return '#888';
  } else if (animal.age <= 6.5) {
    return '#555';
    } else {
    return '#000';
    }
  }

  priceColor(animal: Animal) {
    if (animal.caretakers <= 4.5) {
    return '#888';
  } else if (animal.caretakers <= 5.5) {
    return '#555';
    } else {
    return '#000';
    }
  }
}
