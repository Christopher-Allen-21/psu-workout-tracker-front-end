import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../../../store/app.state";
import { ClearCompletedExercises } from "../../../store/app.action";
import { HttpClient } from "@angular/common/http";
import { WorkoutHistory } from "../../../models/workoutHistory";
import { DatePipe } from "@angular/common";
import { selectChosenProgram, selectCurrentUser } from "../../../store/app.selector";
import { Program } from "../../../models/program";
import { User } from "../../../models/user";


@Component({
    selector: 'save-workout-popup',
    templateUrl: './save-workout-popup.component.html',
    styleUrl: './save-workout-popup.component.scss',    
    providers: [DatePipe],
    imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class SaveWorkoutPopupComponent {
    readonly dialogRef = inject(MatDialogRef<SaveWorkoutPopupComponent>);
    baseUrl: string = 'https://psu-workout-tracker-backend-b9f46449d11d.herokuapp.com/'
    program: Program = null
    user: User
    
    currentDate: string
  
    constructor(
      private router: Router, 
      private readonly httpClient: HttpClient,
      private readonly store: Store<AppState>,
      private datePipe: DatePipe
    ) {
      this.currentDate = this.datePipe.transform(new Date(), 'yyyy/MM/dd');
    }

    ngOnInit(): void {
      this.store.select(selectCurrentUser).subscribe((data) => {
            this.user = data
          })
      this.store.select(selectChosenProgram).subscribe((data) => {
        this.program = data
      })
    }
    
    saveWorkout(): void {
      let url = this.baseUrl + 'workout-history/'
      
      let request: WorkoutHistory = {
        pk: this.datePipe.transform(new Date(), 'yyyyMMdd') + '#' + this.program.name,
        sk: this.datePipe.transform(new Date(), 'yyyyMMdd') + '#' + this.program.name,
        dateOfWorkout:  this.currentDate,
        exercises: [],
        feeling: "Mid",
        program: this.program.pk,
        userId: this.user.pk,
        duration: 0,
      }
  
      this.httpClient.post(url, request, {observe: 'response'}).subscribe({
        next: (res) => {
          alert("Response status code: " + JSON.stringify(res.status) + "\nWorkout History created successfully")
        }
      })
  
      this.returnToChooseProgram()
    }
  
    returnToChooseProgram(): void {
      this.store.dispatch(ClearCompletedExercises())
      this.router.navigateByUrl('workout/selectProgram')
    }
  }