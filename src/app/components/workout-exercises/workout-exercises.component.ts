import { Component } from '@angular/core';

@Component({
  selector: 'app-workout-exercises',
  imports: [],
  templateUrl: './workout-exercises.component.html',
  styleUrl: './workout-exercises.component.css'
})
export class WorkoutExercisesComponent {
  //this is a component we can have a history of what exercises have been done. Have the exercises grouped by the day completed.
  //make it a drop down
  //drop down title: {{Day - Date - Workout-focus}}
  //drop down content: {{ foreach exercise: exercise-type, number_of_sets, number_of_reps, pr_set?, :pr_weigt, legacy_pr}}
  //incorperate pagination
}
