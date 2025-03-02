import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from '../models/user';
import { AppState } from '../store/app.state';
import { selectCurrentUser } from '../store/app.selector';
import { Store } from '@ngrx/store';
import { WorkoutHistory } from '../models/workoutHistory';
import { ReplaceNullPipe } from '../utilities/pipes/replace-null.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programs',
  imports: [ReplaceNullPipe],
  templateUrl: './workout-history.component.html',
  styleUrl: './workout-history.component.scss'
})
export class WorkoutHistoryComponent {
  baseUrl: string = 'https://psu-workout-tracker-backend-b9f46449d11d.herokuapp.com/'
  user: User 
  workoutHistory: WorkoutHistory[] = []
  
  constructor(
    private router: Router, 
    private readonly httpClient: HttpClient,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit(): void {
        this.store.select(selectCurrentUser).subscribe((data) => {
          this.user = data
        })
    this.getWorkoutHistoryByUser()
  }


  getWorkoutHistoryByUser(): void {
    let url: string = this.baseUrl + 'workout-history/user/' + this.user.pk

    this.httpClient.get<WorkoutHistory[]>(url).subscribe(res => {
      let responseObject = {...res}
      this.workoutHistory = responseObject['Items']
    })
  }
}
