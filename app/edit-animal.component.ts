import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div>
        <div *ngIf="childSelectedAnimal">
          <div id="edit-animal-wrapper">
          <h1>Edit Animal</h1>
          <label>Enter Animal Species:</label>
          <br>
          <input [(ngModel)]="childSelectedAnimal.species">
          <br>
          <label>Enter Animal Name:</label>
          <br>
          <input [(ngModel)]="childSelectedAnimal.name">
          <br>
          <label>Enter Animal Diet:</label>
          <br>
          <input [(ngModel)]="childSelectedAnimal.diet">
          <br>
          <label>Enter Animal Location:</label>
          <br>
          <input [(ngModel)]="childSelectedAnimal.location">
          <br>
          <label>Enter Animal Caretakers:</label>
          <input [(ngModel)]="childSelectedAnimal.caretakers">
          <br>
          <label>Enter Animal Sex:</label>
          <input [(ngModel)]="childSelectedAnimal.sex">
          <br>
          <label>Enter Animal Likes:</label>
          <input [(ngModel)]="childSelectedAnimal.likes">
          <br>
          <label>Enter Animal Dislikes:</label>
          <input [(ngModel)]="childSelectedAnimal.dislikes">
          <br>
          <label>Enter Animal Fun Fact:</label>
          <input [(ngModel)]="childSelectedAnimal.funFact">
          <label>Is the animal a visitor favorite?</label>
          <input type="checkbox" (click)="popularClicked(childSelectedAnimal)"/><br>
          <br>
          <button (click)="doneButtonClicked()">Update</button>
          </div>
        </div>
      </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();
  @Output() popularClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

  popularClicked() {
    this.popularClickedSender.emit(this.childSelectedAnimal);
  }
}
