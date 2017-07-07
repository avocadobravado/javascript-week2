import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule }  from '@angular/forms';
import { Animalomponent } from './animal-database.component';
import { EditAnimalComponent } from './edit-animal.component';
import { NewAnimalComponent } from './new-animal.component';
// import { FilterPipe } from './sorter.pipe';

@NgModule({
  imports: [ BrowserModule,
             FormsModule
            ],
  declarations: [ AppComponent,
                  AnimalComponent,
                  EditAnimalComponent,
                  // FilterPipe,
                  NewAnimalComponent
                ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
