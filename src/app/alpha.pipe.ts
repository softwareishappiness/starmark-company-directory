import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alpha'
})
export class AlphaPipe implements PipeTransform {

  transform(value: any, letter: string): any {
      return value.filter(employee => employee.lastName.startsWith(letter));
  }

}
