import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h1>Add a New Animal</h1>
    <div class="new-animal-wrapper">
    <div>
     <label>Enter Animal Name:</label>
     <input #newName>
   </div>
   <div>
   <label>Enter Animal Name:</label>
     <input #newBrand>
   </div>
   <div>
    <label>New price:</label>
      <input #newPrice>
    <div>
    <label>Animal ABV:</label>
      <input #newAbv>
    </div>
    <button (click)="submitForm(newName.value, newBrand.value, newPrice.value, newAbv.value);">Add Animal 🍺</button>
    </div>
    </div>
  `
})
// <input type="checkbox" [(ngModel)]="popular" [value]="true" #newPopular name="popular">Yes (optional)<br>

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, abv: number, staffPick: boolean) {
    var newAnimalToAdd: Animal = new Animal(name, brand, price, abv);
    this.newAnimalSender.emit(newAnimalToAdd);
    console.log(newAnimalToAdd);
  }
}
