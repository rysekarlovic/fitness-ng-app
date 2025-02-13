import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  //store all types of exercises here
  //store all finished workouts here - eventually store in MangoDB

  getExercises(startDate: number, endDate: number, otherparams: string ) {
    //fetch exercises from Database with the params used as search parameters in the database
    return startDate + endDate
  }

  //Post exercises and Edit Exercises wil eventually be combined into a single function SaveExercises()
  postExercises(exerciseData: any ){
    //function for taking user Input posting exercise to MongoDB
    return exerciseData
  }

  //function for editing exercise, then patching it to MongoDB.
  editExercises(postId: number){
    return postId
  }
  

  constructor() { }
}
