import { Component } from '@angular/core';
import { Animal } from './animal.model';
import { AnimalComponent } from './animal-inventory.component';

 @Component({
   selector: 'footer-layout',
   template: `
        <div class="container-fluid">
          <div class="row">
            <div class="col col-md-12">
            </div>
          </div>
        </div>
     `
 })

 export class FooterComponent {
  }
