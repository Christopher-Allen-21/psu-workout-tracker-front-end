import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Program } from '../../models/program';
import { HttpClient } from '@angular/common/http';
import { ReplaceNullPipe } from '../../utilities/pipes/replace-null.pipe';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { SetChosenProgram } from '../../store/app.action';
import { MatDialog } from '@angular/material/dialog';
import { DialogAnimationsExampleDialog } from './choose-program-popup/choose-program-popup.component';

@Component({
  selector: 'app-choose-program',
  imports: [ReplaceNullPipe],
  templateUrl: './choose-program.component.html',
  styleUrl: './choose-program.component.scss'
})
export class ChooseWorkoutComponent {
  baseUrl: string = 'https://psu-workout-tracker-backend-b9f46449d11d.herokuapp.com/'
  readonly dialog = inject(MatDialog)
  customPrograms: Program[] = []
  premadePrograms: Program[] = []

  constructor(
    private router: Router, 
    private readonly httpClient: HttpClient,
    private readonly store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.getPrograms()
  }

  getPrograms(): void {
    let url: string = this.baseUrl + 'programs/'
    let programs: Program[] = []

    this.httpClient.get<Program>(url).subscribe(res => {
      let responseObject = {...res}
      programs = responseObject['Items']

      this.customPrograms = programs.filter((item) => item.customOrPremade === 'Custom').sort((a,b) => a.pk < b.pk ? -1 : 1)
      this.premadePrograms = programs.filter((item) => item.customOrPremade === 'Premade').sort((a,b) => a.pk < b.pk ? -1 : 1)
    })
  }

  returnToStartWorkout(): void {
    this.router.navigateByUrl('workout');
  }

  openDialog(program: Program, enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.store.dispatch(
      SetChosenProgram({
        chosenProgram: program
      })
    )

    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    })
  }
}