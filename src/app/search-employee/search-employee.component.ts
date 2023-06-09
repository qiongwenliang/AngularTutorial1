import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.scss']
})
export class SearchEmployeeComponent {
  fName =""
  age =""
  constructor(private activatedRoute:ActivatedRoute){
    this.activatedRoute.queryParams.subscribe((p) => {
      this.fName = p["name"],
      this.age = p["age"]
    })
  }
}
