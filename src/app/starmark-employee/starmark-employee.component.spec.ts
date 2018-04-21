import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarmarkEmployeeComponent } from './starmark-employee.component';

describe('StarmarkEmployeeComponent', () => {
  let component: StarmarkEmployeeComponent;
  let fixture: ComponentFixture<StarmarkEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarmarkEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarmarkEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
