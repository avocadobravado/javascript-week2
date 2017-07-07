import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "filter",
  pure: false
})

export class FilterPipe implements PipeTransform {


  transform(input: Animal[], desiredFilter) {
    var output: Animal[] = [];
    if(desiredFilter === "showMostPopular") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].popular === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }


}
