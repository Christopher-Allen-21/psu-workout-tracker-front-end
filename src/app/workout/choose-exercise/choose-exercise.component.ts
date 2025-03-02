import { Component } from '@angular/core';
import { Program } from '../../models/program';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Exercise } from '../../models/exercise';
import { ReplaceNullPipe } from '../../utilities/pipes/replace-null.pipe';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { 
  selectChosenProgram, 
  selectCompletedExercises 
} from '../../store/app.selector';
import { ClearCompletedExercises, SetChosenWorkoutAndExercise } from '../../store/app.action';
import { Workout } from '../../models/workout';

@Component({
  selector: 'choose-exercise',
  imports: [ReplaceNullPipe],
  templateUrl: './choose-exercise.component.html',
  styleUrl: './choose-exercise.component.scss'
})
export class ChooseExerciseComponent {
  baseUrl: string = 'https://psu-workout-tracker-backend-b9f46449d11d.herokuapp.com/'
  program: Program = null
  workouts: Workout[] = []
  exercises: Exercise[] = []
  completedExercises: Exercise[] = []

  constructor(
    private router: Router, 
    private readonly httpClient: HttpClient,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.select(selectChosenProgram).subscribe((data) => {
      this.program = data
    })
    this.store.select(selectCompletedExercises).subscribe((data) => {
      this.completedExercises = data
    })

    this.workouts = this.program.workouts
    this.getExercises()
  }

  getExercises(): void {
    let url: string = this.baseUrl + 'exercises/'
    let allExercises: Exercise[] = []

    this.httpClient.get<Exercise>(url).subscribe(res => {
      let responseObject = {...res}
      allExercises = responseObject['Items']
      
      for(let exercise of allExercises) {
        for(let workoutExercise of this.workouts) {
          if(exercise.pk === workoutExercise.exercise.pk) {
            this.exercises.push(exercise)
          }
        }
      }

      this.exercises.sort((a,b) => a.pk < b.pk ? -1 : 1)
    })
  }

  isExerciseCompleted(exerciseInTable: Exercise): boolean {
    for(let exercise of this.completedExercises) {
      if(exercise.pk == exerciseInTable.pk) {
        return true
      }
    }

    return false
  }

  returnToChooseProgram(): void {
    this.store.dispatch(ClearCompletedExercises())
    this.router.navigateByUrl('workout/select')
  }

  startChosenExercise(exercise: Exercise): void {
    let chosenWorkout: Workout = this.workouts.filter(workout => workout.exercise.pk === exercise.pk)[0]

    this.store.dispatch(
      SetChosenWorkoutAndExercise({
        chosenWorkout: chosenWorkout,
        chosenExercise: exercise
      })
    )
    this.router.navigateByUrl('workout/exercise')
  }

  saveWorkout(): void {
    // save workout
  }
}
