import { Component } from '@angular/core';
import { Animal } from './animal.model';
import { AnimalComponent } from './animal-inventory.component';

 @Component({
   selector: 'footer-layout',
   template: `
        <div class="container">
        <div class="row">
        <p>
        <div class="col col-md-12">
        <h1>This is the footer</h1>
        </div>
        </div>
        </div>
     `
 })

 export class FooterComponent {
  }
