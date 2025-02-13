import { Component } from '@angular/core';

@Component({
  selector: 'app-workout-routine',
  imports: [],
  standalone: true,
  templateUrl: './workout-routine.component.html',
  styleUrl: './workout-routine.component.css'
})
export class WorkoutRoutineComponent {

  // This info gets updated from the Database, and will be used in the summary to show general progression
  // as well as should include projected PR increases. Increasing by 1 rep or 5lbs-10lbs for the next week
  workoutRoutine = {
    Stretches: {times_per_week: 5, set_total: 1},
    Pullups: {times_per_week: 5, set_total: 5, personal_record_weight: 0, personal_record_reps: 5, },
    Benchpress: {times_per_week: 3, set_total: 15, personal_record_weight: 135, personal_record_reps: 1, },
    Squats: {times_per_week: 1, set_total: 5, personal_record_weight: 200, personal_record_reps: 5, },
    Deadlifts: {times_per_week: 1, set_total: 5, personal_record_weight: 200, personal_record_reps: 1, },
  }
  
    
  //Component for configuring the workout goals for 

  //Benchpress 3 times a week, 5 sets, # sets,
  //Deadlift 3 times a week
}