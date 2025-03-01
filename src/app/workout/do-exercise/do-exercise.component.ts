import { Component } from '@angular/core';
import { Exercise } from '../../models/exercise';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { selectChosenExercise } from '../../store/app.selector';

@Component({
  selector: 'do-exercise',
  imports: [],
  templateUrl: './do-exercise.component.html',
  styleUrl: './do-exercise.component.scss'
})
export class DoExerciseComponent {
  baseUrl: string = 'https://psu-workout-tracker-backend-b9f46449d11d.herokuapp.com/'
  exercise: Exercise = null

  constructor(
    private router: Router, 
    private readonly httpClient: HttpClient,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.select(selectChosenExercise).subscribe((data) => {
      this.exercise = data
    })
  }

  returnToChooseProgram(): void {
    this.router.navigateByUrl('workout/in-progress');
  }
}
