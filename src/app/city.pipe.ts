import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city'
})
export class CityPipe implements PipeTransform {

    transform(value: any, city: string): any {
        if (city) {
            return value.filter(employee => employee.city.startsWith(city));
        } else {
            return value;
        }
  }

}
