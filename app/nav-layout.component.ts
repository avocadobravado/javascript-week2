import { Component } from '@angular/core';
import { Animal } from './animal.model';
import { AnimalComponent } from './animal-inventory.component'

 @Component({
   selector: 'nav-layout',
   template: `
   <nav class="navbar">
    <div class="container-fluid">
    <!-- Navbar brand -->
      <div class="navbar-header">
      <a class="navbar-brand" href="index.html"><img src="http://gloria-project.eu/wp-content/uploads/2012/06/logo-128-transp.png" alt="Rose City Zoo">
      </a>
      </div>
    <!-- Right side of navbar -->
      <span class="nav navbar-nav navbar-right">
      <p><em>Admin Login</em></p>
      </span>
    </div><!--Container close -->
   </nav>
     `
 })

 export class NavComponent {

  }
