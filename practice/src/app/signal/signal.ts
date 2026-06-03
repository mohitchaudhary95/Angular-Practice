import { Component,effect,signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  data: WritableSignal<number | string>= signal(10);// can also be string
  count=signal(10);

  constructor() {
    effect(()=>{
      console.log('Count value is : ', this.count());
    })
  }

  updateValue(type:string){
    if(type=='inc'){
      this.count.set(this.count()+1);
      // this.data.update((val)=>val+1);// this will work only if data is of type number or single type data
    } else if(type=='dec'){
      this.count.set(this.count()-1);
    }
  }
}
