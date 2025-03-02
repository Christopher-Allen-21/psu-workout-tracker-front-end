import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { 
  selectChosenWorkout, 
  selectChosenExercise,
  selectCompletedExercises
 } from '../../store/app.selector';
import { Workout } from '../../models/workout';
import { Exercise } from '../../models/exercise';
import { ReplaceNullPipe } from '../../utilities/pipes/replace-null.pipe';
import { AddCompletedExercise } from '../../store/app.action';

@Component({
  selector: 'do-exercise',
  imports: [ReplaceNullPipe],
  templateUrl: './do-exercise.component.html',
  styleUrl: './do-exercise.component.scss'
})
export class DoExerciseComponent {
  baseUrl: string = 'https://psu-workout-tracker-backend-b9f46449d11d.herokuapp.com/'
  workout: Workout = null
  exercise: Exercise = null
  completedExercises: Exercise[] = []

  constructor(
    private router: Router, 
    private readonly httpClient: HttpClient,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.select(selectChosenWorkout).subscribe((data) => {
      this.workout = data
    })
    this.store.select(selectChosenExercise).subscribe((data) => {
      this.exercise = data
    })
    this.store.select(selectCompletedExercises).subscribe((data) => {
        this.completedExercises = data
      })
  }

  returnToChooseProgram(finishedExercise: boolean): void {
    console.log(finishedExercise)
    if(finishedExercise) {
      this.store.dispatch(AddCompletedExercise({
        completedExercise: this.exercise
      }))
    }
    this.router.navigateByUrl('workout/in-progress');
  }
}
