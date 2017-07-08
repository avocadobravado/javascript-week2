import { Component } from '@angular/core';
import { Animal } from './animal.model';
import { AnimalComponent } from './animal-inventory.component'

 @Component({
   selector: 'nav-layout',
   template: `
   <!--Monkey business-->
    <div class="monkey-wrapper">
      <div class="monkey">
        <img src="resources/img/monkey.png" class="monkey-img">
      </div>
    </div>
   <nav class="navbar">
    <div class="container-fluid">
    <!-- Navbar brand -->
      <div class="navbar-header">
        <a class="navbar-brand" href="index.html"><img src="resources/img/Logo.png" alt="Rose City Zoo">
        </a>
      </div>
    </div><!--Container close -->
   </nav>
     `
 })

 export class NavComponent {

  }
