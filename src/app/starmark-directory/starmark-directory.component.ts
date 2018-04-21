import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { filter, map, take, toArray } from 'rxjs/operators';
import { StarmarkEmployeeService } from '../starmark-employee.service';
import {Employee} from '../employee';

@Component({
  selector: 'app-starmark-directory',
  templateUrl: './starmark-directory.component.html',
  styleUrls: ['./starmark-directory.component.css']
})
export class StarmarkDirectoryComponent implements OnInit {

  public letters: any = [];
  public employees: any = [];
  public cities: any = [];

  public selectedCity: string;

  private employeeService: StarmarkEmployeeService;

  constructor(employeeService: StarmarkEmployeeService) {
    this.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    this.employeeService = employeeService;
  }

  async ngOnInit() {
    this.employees = await this.employeeService.getEmployees();
    const found = [];
    for (let e = 0; e < (this.employees).length; e++) {
        if (! (this.employees[e].city in found)) {
          found[this.employees[e].city]++;
          this.cities.push(this.employees[e].city);
        }
    }
    this.employees.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));
    this.cities.sort((a, b) => (a > b ? 1 : -1));
  }

  showLetter(letter: string, city: string) {
    return this.employees.filter((employee) => {
      if (city) {
          return employee.lastName.startsWith(letter) && employee.city.startsWith(city);
      } else {
          return employee.lastName.startsWith(letter);
      }
    }).length;
  }

}
