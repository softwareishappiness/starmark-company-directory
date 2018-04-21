import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, take, toArray } from 'rxjs/operators';
import {Employee} from './employee';

@Injectable()
export class StarmarkEmployeeService {

    private employees: any[];

    constructor(private http: HttpClient) { }

    async getEmployees() {
        return await this.http.get<Employee[]>('http://challenge-dev.starmarkcloud.com/users')
            .pipe(
                map(employees => {
                    const directory = [];
                    employees.forEach(employee => {
                        directory.push({
                            id: employee.id,
                            firstName: employee.firstName,
                            lastName: employee.lastName,
                            phone: employee.phone,
                            email: employee.email,
                            city: employee.address.city,
                            state: employee.address.state,
                            dob: employee.dob,
                            avatar: employee.avatar,
                            tags: tags: Array.from((new Set(employee.tags)))
                        });
                    });
                    return directory;
                })
            )
            .toPromise();
    }


}
