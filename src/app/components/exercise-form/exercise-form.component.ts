import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-form',
  imports: [],
  standalone: true,
  templateUrl: './exercise-form.component.html',
  styleUrl: './exercise-form.component.css'
})
export class ExerciseFormComponent {

// Features:
// Should have input fields for workout-time & date, workout_focus, workout_exercises, weight (including bar)


//will need to look into a library for display the calendar
  //Object structure - what data is needed for each day of the calendar
  Object = {
    // id: automatically generated
    // submission_date: automatically generated
    // submission_time: automatically generated
    // workout_date: manually entered
    // workout_time: manually entered
    // workout_focus: (Arms, Legs, Core, Shoulders, Chest, Flexibility, Endurance)
    // workouts: (Benchpress, Squat, Deadlift, Cardio, Boxing, Skateboarding)
    // workouts: {
    //   [
        //workout - sets - reps - weight?
      //sets,
      //reps, 
      //notes,
      //muscle groups worked. - should be figured out by taking the workout and and having an object to reference that contains the muscle groups
      //ex. Deadlift = {'glutes', 'hamstrings', 'erector spinae (lower back muscles)'}
    //   ]
    // }
      
    
  }
}
