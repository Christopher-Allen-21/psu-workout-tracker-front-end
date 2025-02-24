import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-workout',
  imports: [],
  templateUrl: './start-workout.component.html',
  styleUrl: './start-workout.component.scss'
})
export class StartWorkoutComponent {
  

  constructor(private router: Router) {}

  startWorkout(): void {
    this.router.navigateByUrl('workout/select');
  }
}
