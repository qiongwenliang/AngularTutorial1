import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
//class name generated from employee-list
employee=[
  {id:1, name:"Daniel", age:30},
  {id:2, name:"Sarah", age:29},
  {id:3, name:"Mia", age:32},
  {id:4, name:"Tobby", age:26}
]
}
