import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkoutFormComponent } from './components/workout-form/workout-form.component';
import { HeaderComponent } from './components/header/header.component';
import { WorkoutSummaryComponent } from './components/workout-summary/workout-summary.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, WorkoutSummaryComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  //App Purpose:
  //The purpose of this application is to track when I go to the gym, what my workouts are
}
