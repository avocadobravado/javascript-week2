import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from './app.component'
import { Beer } from './beer.model';


@Component({
  selector: 'beer-list',
  template: `

      <select (change)="onChange($event.target.value)" class="filter">
        <option value="showMostPopular">Show Most Popular</option>
        <option value="showStaffPicks">Show Staff Picks</option>
        <option value="showAll" selected="selected">Show All</option>
      </select>

     <div class={{currentBeer.priceColor}} *ngFor="let currentBeer of childBeerList | filter:filterByChoice">
    <div class="card col-md-6">
     <div class="card-block">
       <div class="card-title"><p>{{currentBeer.name}}</p></div>
       <p>{{currentBeer.brand}}</p>
       <p><span [style.color]="abvColor(currentBeer)">{{currentBeer.abv}}% ABV</span></p>
       <p>{{currentBeer.pints}} pints available</p>
       <p *ngIf="currentBeer.popular === true">Popular*</p>
       <p *ngIf="currentBeer.staffPick === true">Staff Pick*</p>
       <p class="price"><span [style.color]="priceColor(currentBeer)">\${{currentBeer.price}}</span></p>
       <a href="#edit-beer-wrapper"><button  *ngIf="parentEmployeePermission === true" (click)="editButtonHasBeenClicked(currentBeer)" class="edit-beer-button">Edit!</button></a>
      </div>
      </div>
  `
})

export class BeerComponent {
  @Input() childBeerList: Beer[];
  @Input() parentEmployeePermission : boolean;
  @Output() clickSender = new EventEmitter();

  filterByChoice: string = "showAll";

  onChange(optionFromMenu) {
    this.filterByChoice = optionFromMenu;
    console.log(this.filterByChoice);
  }

  editButtonHasBeenClicked(beerToEdit: Beer) {
    this.clickSender.emit(beerToEdit);
  }

  abvColor(beer: Beer) {
    if (beer.abv <= 5.5) {
    return '#888';
  } else if (beer.abv <= 6.5) {
    return '#555';
    } else {
    return '#000';
    }
  }

  priceColor(beer: Beer) {
    if (beer.price <= 4.5) {
    return '#888';
  } else if (beer.price <= 5.5) {
    return '#555';
    } else {
    return '#000';
    }
  }
}
