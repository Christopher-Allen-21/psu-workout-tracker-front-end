import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from "@angular/material/dialog";
import { Router } from "@angular/router";


@Component({
    selector: 'choose-program-popup',
    templateUrl: 'choose-program-popup.component.html',
    imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrl: 'choose-program-popup.component.scss'
  })
  export class DialogAnimationsExampleDialog {
    readonly dialogRef = inject(MatDialogRef<DialogAnimationsExampleDialog>);
  
    constructor(
      private router: Router, 
    ) {}
  
    startChosenWorkout(): void {
      this.router.navigateByUrl('workout/in-progress');
    }
  }