import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule }  from '@angular/forms';
import { NavComponent } from './nav-layout.component';
import { AnimalComponent } from './animal-inventory.component';
import { EditAnimalComponent } from './edit-animal.component';
import { NewAnimalComponent } from './new-animal.component';
import { FooterComponent } from './footer-layout.component';
import { FilterPipe } from './sorter.pipe';

@NgModule({
  imports: [ BrowserModule,
             FormsModule
            ],
  declarations: [ AppComponent,
                  NavComponent,
                  AnimalComponent,
                  EditAnimalComponent,
                  NewAnimalComponent,
                  FooterComponent,
                  FilterPipe
                ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
