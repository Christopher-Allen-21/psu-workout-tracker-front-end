import { Component } from '@angular/core';
import { Program } from '../../models/program';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exercise } from '../../models/exercise';
import { ReplaceNullPipe } from '../../utilities/pipes/replace-null.pipe';

@Component({
  selector: 'app-do-workout',
  imports: [ReplaceNullPipe],
  templateUrl: './do-workout.component.html',
  styleUrl: './do-workout.component.scss'
})
export class DoWorkoutComponent {
baseUrl: string = 'https://psu-workout-tracker-backend-b9f46449d11d.herokuapp.com/'
  program: Program = {
    "pk": "2",
    "sk": "5",
    "bodyArea": [
      "Chest", "Arms"
    ],
    "customOrPremade": "Premade",
    "description": "The Push program consists of exercises that focus on pushing movements.",
    "musclesUsed": [],
    "name": "Push",
    "timesCompleted": 0,
    "exercises": [ "0", "2", "3", "4", "5", "6"]
    
  }
  exercises: Exercise[] = []

  constructor(private router: Router, private readonly httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getPrograms()
  }

  getPrograms(): Observable<Exercise[]> {
    let url: string = this.baseUrl + 'exercises/'
    let exercisesObservable: Observable<Exercise[]>
    let exercises: Exercise[] = []

    this.httpClient.get<Exercise>(url).subscribe(res => {
      let responseObject = {...res}
      exercises = responseObject['Items']

      this.exercises = exercises.filter((item) => this.program.exercises.includes(item.pk)).sort((a,b) => a.pk < b.pk ? -1 : 1)
    })

    return exercisesObservable
  }

  returnToChooseProgram(): void {
    this.router.navigateByUrl('workout/select');
  }

  startChosenExercise(exercise: Exercise): void {
    console.log(exercise)
    this.router.navigateByUrl('workout/exercise');
  }
}
