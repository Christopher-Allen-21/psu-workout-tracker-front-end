import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-workout',
  imports: [],
  templateUrl: './start-workout.component.html',
  styleUrl: './start-workout.component.scss'
})
export class StartWorkoutComponent {
  // router: Router

  constructor(private router: Router) {
    // this.router = router
  }

  startWorkout(): void {
    this.router.navigateByUrl('workout/select');
  }
}
