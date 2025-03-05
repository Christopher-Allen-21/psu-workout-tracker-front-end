import { Component, inject } from '@angular/core';
import { Program } from '../../models/program';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Exercise } from '../../models/exercise';
import { ReplaceNullPipe } from '../../utilities/pipes/replace-null.pipe';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { 
  selectChosenProgram, 
  selectCompletedExercises, 
  selectCurrentUser
} from '../../store/app.selector';
import { AddCompletedExercise, ClearCompletedExercises, SetChosenWorkoutAndExercise } from '../../store/app.action';
import { Workout } from '../../models/workout';
import { WorkoutHistory } from '../../models/workoutHistory';
import { DatePipe } from '@angular/common';
import { User } from '../../models/user';
import { MatDialog } from '@angular/material/dialog';
import { DontSaveWorkoutPopupComponent } from './dont-save-workout-popup/dont-save-workout-popup.component';
import { SaveWorkoutPopupComponent } from './save-workout-popup/save-workout-popup.component';

@Component({
  selector: 'choose-exercise',
  imports: [ReplaceNullPipe],
  templateUrl: './choose-exercise.component.html',
  styleUrl: './choose-exercise.component.scss'
})
export class ChooseExerciseComponent {
  baseUrl: string = 'https://psu-workout-tracker-backend-b9f46449d11d.herokuapp.com/'
  readonly dialog = inject(MatDialog)
  program: Program = null
  workouts: Workout[] = []
  exercises: Exercise[] = []
  completedExercises: Exercise[] = []
  user: User

  constructor(
    private router: Router, 
    private readonly httpClient: HttpClient,
    private readonly store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.store.select(selectCurrentUser).subscribe((data) => {
          this.user = data
        })
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

  addCompletedExercise(exercise: Exercise): void {

    // need to implement something for when they remove check mark
    
    this.store.dispatch(AddCompletedExercise({
      completedExercise: exercise
    }))
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

  openDontSaveDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DontSaveWorkoutPopupComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    })
  }

  openSaveDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(SaveWorkoutPopupComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    })
  }



}
