import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { Profile } from './profile/profile';
import { Events } from './events/events';
import { Login } from './login/login';
import { Loops } from './loops/loops';
import { Signal } from './signal/signal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Counter,Profile,Events,Login,Loops,Signal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practice');
}
