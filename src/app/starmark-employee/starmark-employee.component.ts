import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-starmark-employee',
  templateUrl: './starmark-employee.component.html',
  styleUrls: ['./starmark-employee.component.css']
})
export class StarmarkEmployeeComponent implements OnInit {

  @Input() profile: any;

  public expanded = false;

  constructor() { }

  ngOnInit() {
  }

  expand() {
      this.expanded = true;
  }

  collapse() {
      this.expanded = false;
  }

}
