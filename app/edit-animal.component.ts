import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div>
        <div *ngIf="childSelectedAnimal">
          <div id="edit-animal-wrapper">
          <h1>Edit Animal</h1>
          <label>Enter Animal Name:</label>
          <br>
          <input [(ngModel)]="childSelectedAnimal.species">
          <br>
          <label>Enter Animal Brand:</label>
          <br>
          <input [(ngModel)]="childSelectedAnimal.name">
          <br>
          <label>Enter Animal Price:</label>
          <br>
          <input [(ngModel)]="childSelectedAnimal.diet">
          <br>
          <label>Enter Animal ABV (1-3):</label>
          <br>
          <input [(ngModel)]="childSelectedAnimal.location">
          <br>
          <input [(ngModel)]="childSelectedAnimal.caretakers">
          <br>
          <input [(ngModel)]="childSelectedAnimal.sex">
          <br>
          <input [(ngModel)]="childSelectedAnimal.likes">
          <br>
          <input [(ngModel)]="childSelectedAnimal.dislikes">
          <br>
          <input [(ngModel)]="childSelectedAnimal.funFact">
          <br>
          <label>Edit number of pints available:</label>
          <br>
          <button (click)="decreaseButtonClicked()" class="pints-available">-1</button>
          <button (click)="increaseButtonClicked()" class="pints-available">+1</button>
          <br>
          <label>Customer Favorite?</label>
          <input type="checkbox" (click)="popularClicked(childSelectedAnimal)"/><br>
          <label>Staff Favorite?</label>
          <input type="checkbox" (click)="staffPickClicked(childSelectedAnimal)"/><br>
          <br>
          <button (click)="doneButtonClicked()">Done 🍻</button>
          </div>
        </div>
      </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();
  @Output() decreaseButtonClickedSender = new EventEmitter();
  @Output() increaseButtonClickedSender = new EventEmitter();
  @Output() popularClickedSender = new EventEmitter();
  @Output() staffPickClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

  decreaseButtonClicked() {
    this.decreaseButtonClickedSender.emit();
  }

  increaseButtonClicked() {
    this.increaseButtonClickedSender.emit();
  }

  popularClicked() {
    this.popularClickedSender.emit(this.childSelectedAnimal);
  }

  staffPickClicked() {
    this.staffPickClickedSender.emit(this.childSelectedAnimal);
  }
}
