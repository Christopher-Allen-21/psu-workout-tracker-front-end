import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { HttpClient } from '@angular/common/http';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { WorkoutHistory } from '../../models/workoutHistory';
import { Program } from '../../models/program';
import { ReplaceNullPipe } from '../../utilities/pipes/replace-null.pipe';

@Component({
  selector: 'app-start-workout',
  imports: [ReplaceNullPipe],
  templateUrl: './start-workout.component.html',
  styleUrl: './start-workout.component.scss'
})
export class StartWorkoutComponent {
  baseUrl: string = 'https://psu-workout-tracker-backend-b9f46449d11d.herokuapp.com/'
  user: User = {
    "pk": "0",
    "sk": "0",
    "birthDate": "03/22/1996",
    "email": "callen7908@yahoo.com",
    "firstName": "Chris",
    "height": 69,
    "lastName": "Allen",
    "weight": 180
   }
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

    this.topProgram = this.programs.filter((item) => item.pk == <string><unknown>topProgramId)[0]
    this.bottomProgram = this.programs.filter((item) => item.pk == <string><unknown>bottomProgramId)[0]
  }

  startWorkout(): void {
    this.router.navigateByUrl('workout/select');
  }

  calculateSetsAndReps(): void {
    let programs: Program[] = []

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
          this.repsCompleted += repSchema.reps
        }
        this.setsCompleted += workout.repSchema.length
      }
    }
  }


}
