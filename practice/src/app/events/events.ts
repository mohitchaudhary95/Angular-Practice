import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  show=false;

  toggleShowAndHide(event:Event){
    this.show=!this.show;
  }

  value=1;
  changeDiv(event:Event){
    this.value=parseInt((event.target as HTMLInputElement).value);
  }
}
