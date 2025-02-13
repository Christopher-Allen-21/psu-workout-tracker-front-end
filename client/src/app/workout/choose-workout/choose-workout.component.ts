import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Program } from '../../models/program';

@Component({
  selector: 'app-choose-workout',
  imports: [],
  templateUrl: './choose-workout.component.html',
  styleUrl: './choose-workout.component.scss'
})
export class ChooseWorkoutComponent {
    programs: Program[] = [ 
      {
        _id: '123',
        name: 'Push',
        description: 'Workout focusing on push movements',
        bodyArea: ['Chest', 'Arms'],
        timesCompleted: 11,
        workouts: [''],
        musclesUsed: null
      },
      {
        _id: '456',
        name: 'Pull',
        description: 'Workout focusing on pull movements',
        bodyArea: ['Back', 'Arms'],
        timesCompleted: 3,
        workouts: [''],
        musclesUsed: null
      },
      {
        _id: '789',
        name: 'Legs',
        description: 'Workout focusing on legs',
        bodyArea: ['Legs'],
        timesCompleted: 0,
        workouts: [''],
        musclesUsed: null
      }
    ]

    constructor(private router: Router) {}
  
    returnToStartWorkout(): void {
      console.log("hi")
      this.router.navigateByUrl('workout');
    }

    startChosenWorkout(programName: string): void {
      console.log(programName)
      this.router.navigateByUrl('workout/in-progress');
    }
}
