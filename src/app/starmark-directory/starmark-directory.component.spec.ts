import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarmarkDirectoryComponent } from './starmark-directory.component';

describe('StarmarkDirectoryComponent', () => {
  let component: StarmarkDirectoryComponent;
  let fixture: ComponentFixture<StarmarkDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarmarkDirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarmarkDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
