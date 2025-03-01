import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { selectChosenWorkout, selectChosenExercise } from '../../store/app.selector';
import { Workout } from '../../models/workout';
import { Exercise } from '../../models/exercise';
import { ReplaceNullPipe } from '../../utilities/pipes/replace-null.pipe';

@Component({
  selector: 'choose-exercise',
  imports: [ReplaceNullPipe],
  templateUrl: './choose-exercise.component.html',
  styleUrl: './choose-exercise.component.scss'
})
export class ChooseExerciseComponent {
  baseUrl: string = 'https://psu-workout-tracker-backend-b9f46449d11d.herokuapp.com/'
  workout: Workout = null
  exercise: Exercise = null

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
    console.log(this.workout)
    console.log(this.exercise)

  }

  returnToChooseProgram(): void {
    this.router.navigateByUrl('workout/in-progress');
  }
}
