import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { Profile } from './profile/profile';
import { Events } from './events/events';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Counter,Profile,Events,Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practice');
}
