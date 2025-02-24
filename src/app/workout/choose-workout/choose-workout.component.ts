import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Program } from '../../models/program';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-choose-workout',
  imports: [],
  templateUrl: './choose-workout.component.html',
  styleUrl: './choose-workout.component.scss'
})
export class ChooseWorkoutComponent {
  baseUrl: string = 'http://localhost:3000/'
  customPrograms: Program[] = []
  premadePrograms: Program[] = []

  constructor(private router: Router, private readonly httpClient: HttpClient) {}

  ngOnInit(): void {
    // this.getPrograms()
  }

  getPrograms(): Observable<Program[]> {
    let url: string = this.baseUrl + 'programs/'
    let programsObservable: Observable<Program[]>
    let programs: Program[] = []

    this.httpClient.get<Program>(url).subscribe(res => {
      let responseObject = {...res}
      programs = responseObject['program']

      this.customPrograms = programs.filter((item) => item.customOrPremade === 'Custom')
      this.premadePrograms = programs.filter((item) => item.customOrPremade === 'Premade')
    })

    return programsObservable
  }

  returnToStartWorkout(): void {
    this.router.navigateByUrl('workout');
  }

  startChosenWorkout(program: Program): void {
    console.log(program)
    this.router.navigateByUrl('workout/in-progress');
  }
}
