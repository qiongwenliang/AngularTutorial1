import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//the class name is AppComponent
export class AppComponent {
  companName="Courier Company";//this is a variable, or property

  employee={
    "id" : 1,
    "name" : "Smith Ryon",
    "age" : 35,
    "salary" : 4500
  }

  firstName="Daniel";
  lastName="Craig";


  firstNumber=10;
  secondNumber=20;
  sum = 0;

  addNumbers(){
    console.log("firstnumber = "+this.firstNumber)
    console.log("second nubmer = "+this.secondNumber)
    this.sum = parseInt(this.firstNumber.toString()) + parseInt(this.secondNumber.toString())
  }


  isRedColor:boolean=false;


  show=true;
  toggleForm(){
    this.show=!this.show;
  }


  employees=[
    {"id":1,"name":"smith", "salary":4500, "dob": new Date("07/21/1996"), "ssn":"0123446576"},
    {"id":2,"name":"George", "salary":2500, "dob": new Date("03/21/1993"), "ssn":"0167443476"},
    {"id":3,"name":"Joe", "salary":4900, "dob": new Date("11/21/1992"), "ssn":"01234892565"},
    {"id":4,"name":"Ryan", "salary":5500, "dob": new Date("10/21/1994"), "ssn":"06552344752"},
  ]

}
