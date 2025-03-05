import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../../../store/app.state";
import { ClearCompletedExercises } from "../../../store/app.action";


@Component({
    selector: 'dont-save-workout-popup',
    templateUrl: './dont-save-workout-popup.component.html',
    styleUrl: './dont-save-workout-popup.component.scss',    
    imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class DontSaveWorkoutPopupComponent {
    readonly dialogRef = inject(MatDialogRef<DontSaveWorkoutPopupComponent>);
  
    constructor(
      private readonly store: Store<AppState>,
      private router: Router, 
    ) {}
  
    returnToChooseProgram(): void {
      this.store.dispatch(ClearCompletedExercises())
      this.router.navigateByUrl('workout/selectProgram')
    }
  }