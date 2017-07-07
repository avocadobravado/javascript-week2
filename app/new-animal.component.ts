import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h1>Add a New Animal Species</h1>

    <div class="new-animal-wrapper">
      <label>Animal Species:</label>
        <input #newSpecies>
      <label>Animal Name:</label>
       <input #newName>
      <label>Animal Age:</label>
        <input #newAge>
      <label>Animal Diet:</label>
        <input #newDiet>
      <label>Animal Location:</label>
        <input #newLocation>
      <label>Number of Daily Caretakers:</label>
        <input #newCaretakers>
      <label>Animal's Sex:</label>
        <input #newSex>
      <label>Animal Likes:</label>
        <input #newLikes>
      <label>Animal Dislikes:</label>
        <input #newDislikes>
      <label>Animal Fun Fact:</label>
        <input #newFunFact>
    <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value, newFunFact.value);">Add Animal 🦁</button>
    </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string, funFact: string, popular: boolean) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes, funFact, popular);
    this.newAnimalSender.emit(newAnimalToAdd);
    console.log(newAnimalToAdd);
  }
}
