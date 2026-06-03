import { Component } from '@angular/core';

@Component({
  selector: 'app-loops',
  imports: [],
  templateUrl: './loops.html',
  styleUrl: './loops.css',
})
export class Loops {

  users=["Mohit","Rohit","Sohit","Pohit","Kohit"];
  students=[
    {name:"Mohit",age:24,email:"mohit@example.com"},
    {name:"Rohit",age:25,email:"rohit@example.com"},
    {name:"Sohit",age:26,email:"sohit@example.com"},
    {name:"Pohit",age:27,email:"pohit@example.com"},
    {name:"Kohit",age:28,email:"kohit@example.com"}
  ]

  getStudentInfo(student:any){
    console.log(`Name: ${student.name}, Age: ${student.age}, Email: ${student.email}`);
  }
}
