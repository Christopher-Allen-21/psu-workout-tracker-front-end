import { Component } from '@angular/core';
import { Program } from '../../models/program';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exercise } from '../../models/exercise';
import { ReplaceNullPipe } from '../../utilities/pipes/replace-null.pipe';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { selectChosenProgram } from '../../store/app.selector';
import { SetChosenExercise } from '../../store/app.action';
import { Workout } from '../../models/workout';
import e from 'express';

@Component({
  selector: 'app-do-workout',
  imports: [ReplaceNullPipe],
  templateUrl: './do-workout.component.html',
  styleUrl: './do-workout.component.scss'
})
export class DoWorkoutComponent {
  baseUrl: string = 'https://psu-workout-tracker-backend-b9f46449d11d.herokuapp.com/'
  program: Program = null
  workouts: Workout[] = []
  exercises: Exercise[] = []

  constructor(
    private router: Router, 
    private readonly httpClient: HttpClient,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.select(selectChosenProgram).subscribe((data) => {
      this.program = data
    })

    this.workouts = this.program.workouts
    this.getExercises()
  }

  getExercises(): void {
    let url: string = this.baseUrl + 'exercises/'
    let exercises: Exercise[] = []

    this.httpClient.get<Exercise>(url).subscribe(res => {
      let responseObject = {...res}
      exercises = responseObject['Items']
      
      for(let exercise of exercises) {
        for(let workoutExercise of this.workouts) {
          if(exercise.pk === workoutExercise.exercise.pk) {
            this.exercises.push(exercise)
          }
        }
      }

      console.log(this.exercises)
      this.exercises.sort((a,b) => a.pk < b.pk ? -1 : 1)
    })

    
  }

  returnToChooseProgram(): void {
    this.router.navigateByUrl('workout/select');
  }

  startChosenExercise(exercise: Exercise): void {
    this.store.dispatch(
      SetChosenExercise({
        chosenExercise: exercise
      })
    )
    this.router.navigateByUrl('workout/exercise');
  }

  saveWorkout(): void {
    // save workout
  }
}
