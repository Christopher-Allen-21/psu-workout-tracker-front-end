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
    "firstName": "Christopher",
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
      this.getWorkoutHistory()
      this.calculateSetsAndReps()
      this.calculateTopAndBottomPrograms()
    }
  
  getWorkoutHistory(): void {
    let url: string = this.baseUrl + 'workout-history/'
    let workoutHistory: WorkoutHistory[] = []

    this.httpClient.get<WorkoutHistory[]>(url).subscribe(res => {
      let responseObject = {...res}
      workoutHistory = responseObject['Items']

      this.workoutHistory = workoutHistory.filter((item) => item.userId === this.user.pk).sort((a,b) => a.pk < b.pk ? -1 : 1)
    })
  }

  getPrograms(): void {
    let url: string = this.baseUrl + 'programs/'

    this.httpClient.get<Program[]>(url).subscribe(res => {
      let responseObject = {...res}
      this.programs = responseObject['Items']
    })

    console.log(this.programs)
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

  }
}
