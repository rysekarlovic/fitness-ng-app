import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  //App Purpose:
  //The purpose of this application is to track when I go to the gym, what my workouts are
  title = 'fitness-app';
}
