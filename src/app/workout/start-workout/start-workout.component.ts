import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { HttpClient } from '@angular/common/http';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { WorkoutHistory } from '../../models/workoutHistory';
import { Program } from '../../models/program';
import { ReplaceNullPipe } from '../../utilities/pipes/replace-null.pipe';
import { selectCurrentUser, selectStartWorkoutStats } from '../../store/app.selector';
import { SetSetsAndReps, SetTopAndBottomPrograms } from '../../store/app.action';

@Component({
  selector: 'app-start-workout',
  imports: [ReplaceNullPipe],
  templateUrl: './start-workout.component.html',
  styleUrl: './start-workout.component.scss'
})
export class StartWorkoutComponent {
  baseUrl: string = 'https://psu-workout-tracker-backend-b9f46449d11d.herokuapp.com/'
  user: User
  workoutHistory: WorkoutHistory[] = []
  programs: Program[] = []
  repsCompleted: number = 0
  setsCompleted: number = 0
  topProgram: Program
  bottomProgram: Program 

  constructor(
    private router: Router, 
    private readonly httpClient: HttpClient,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.select(selectCurrentUser).subscribe((data) => {
      this.user = data
    })
    this.store.select(selectStartWorkoutStats).subscribe((data) => {
      this.repsCompleted = data.repsCompleted
      this.setsCompleted = data.setsCompleted
      this.topProgram = data.topProgram
      this.bottomProgram = data.bottomProgram
    })

    this.getPrograms()
    this.getWorkoutHistoryByUser()
    this.calculateSetsAndReps()
    this.calculateTopAndBottomPrograms()
  }
  
  getWorkoutHistoryByUser(): void {
    let url: string = this.baseUrl + 'workout-history/user/' + this.user.pk

    this.httpClient.get<WorkoutHistory[]>(url).subscribe(res => {
      let responseObject = {...res}
      this.workoutHistory = responseObject['Items']
    })
  }

  getPrograms(): void {
    let url: string = this.baseUrl + 'programs/'

    this.httpClient.get<Program[]>(url).subscribe(res => {
      let responseObject = {...res}
      this.programs = responseObject['Items']
    })
  }
  
  calculateTopAndBottomPrograms(): void {
    let topProgramId: number
    let bottomProgramId: number

    topProgramId = Math.max(...this.workoutHistory.map(item => <number><unknown>item.program))
    bottomProgramId = Math.min(...this.workoutHistory.map(item => <number><unknown>item.program))

    let topProgram = this.programs.filter((item) => item.pk == <string><unknown>topProgramId)[0]
    let bottomProgram = this.programs.filter((item) => item.pk == <string><unknown>bottomProgramId)[0]

    this.store.dispatch(SetTopAndBottomPrograms({
      topProgram: topProgram,
      bottomProgram: bottomProgram
    }))
  }

  startWorkout(): void {
    this.router.navigateByUrl('workout/selectProgram');
  }

  calculateSetsAndReps(): void {
    let programs: Program[] = []
    let repsCompleted: number = 0
    let setsCompleted: number = 0

    // get number of programs completd
    for(let workout of this.workoutHistory) {
      for(let program of this.programs) {
        if(workout.program == program.pk) {
          programs.push(program)
        }
      }
    }

    // set reps and sets completed
    for(let program of programs) {
      for(let workout of program.workouts) {
        for(let repSchema of workout.repSchema) {
          repsCompleted += repSchema.reps
        }
        setsCompleted += workout.repSchema.length
      }
    }

    this.store.dispatch(SetSetsAndReps({
      repsCompleted: repsCompleted,
      setsCompleted: setsCompleted
    }))
  }

  

}
