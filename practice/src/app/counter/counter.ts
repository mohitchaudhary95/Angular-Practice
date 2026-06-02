import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {

  count=0;

  increment(){
    this.count++;
  }
  reset(){
    this.count = 0;
  }

  decrement(){
    if(this.count>0){
 this.count--;
    }
  }

 handleEvent(event:MouseEvent){
  console.log(event.type);
 }

 getFocus(event:Event){
  console.log(event.type);
 }
  getBlur(event:Event){
  console.log(event.type);
 }

 name="";
 displayname="";

 getName(event:Event){
  this.name=(event.target as HTMLInputElement).value;
  console.log(event.type);
 }

 showName(){
  this.displayname=this.name;
 }
 setName(){
  this.name="Mohit";
 }

}
