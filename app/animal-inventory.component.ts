import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from './app.component'
import { Animal } from './animal.model';


@Component({
  selector: 'animal-list',
  template: `

      <select (change)="onChange($event.target.value)" class="filter">
        <option value="showMostPopular">Show Most Popular</option>
        <option value="showStaffPicks">Show Staff Picks</option>
        <option value="showAll" selected="selected">Show All</option>
      </select>

     <div class={{currentAnimal.priceColor}} *ngFor="let currentAnimal of childAnimalList | filter:filterByChoice">
    <div class="card col-md-6">
     <div class="card-block">
       <div class="card-title"><p>{{currentAnimal.name}}</p></div>
       <p>{{currentAnimal.brand}}</p>
       <p><span [style.color]="abvColor(currentAnimal)">{{currentAnimal.abv}}% ABV</span></p>
       <p>{{currentAnimal.pints}} pints available</p>
       <p *ngIf="currentAnimal.popular === true">Popular*</p>
       <p *ngIf="currentAnimal.staffPick === true">Staff Pick*</p>
       <p class="price"><span [style.color]="priceColor(currentAnimal)">\${{currentAnimal.price}}</span></p>
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
    if (animal.abv <= 5.5) {
    return '#888';
  } else if (animal.abv <= 6.5) {
    return '#555';
    } else {
    return '#000';
    }
  }

  priceColor(animal: Animal) {
    if (animal.price <= 4.5) {
    return '#888';
  } else if (animal.price <= 5.5) {
    return '#555';
    } else {
    return '#000';
    }
  }
}
