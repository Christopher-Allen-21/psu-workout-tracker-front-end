import { Component } from '@angular/core';
import { Exercise } from '../../models/exercise';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'do-exercise',
  imports: [],
  templateUrl: './do-exercise.component.html',
  styleUrl: './do-exercise.component.scss'
})
export class DoExerciseComponent {
baseUrl: string = 'https://psu-workout-tracker-backend-b9f46449d11d.herokuapp.com/'
  program: Exercise = null

  constructor(private router: Router, private readonly httpClient: HttpClient) {}

  ngOnInit(): void {

  }


  returnToChooseProgram(): void {
    this.router.navigateByUrl('workout/in-progress');
  }
}
