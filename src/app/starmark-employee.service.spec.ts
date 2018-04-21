import { TestBed, inject } from '@angular/core/testing';

import { StarmarkEmployeeService } from './starmark-employee.service';

describe('StarmarkEmployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StarmarkEmployeeService]
    });
  });

  it('should be created', inject([StarmarkEmployeeService], (service: StarmarkEmployeeService) => {
    expect(service).toBeTruthy();
  }));
});
