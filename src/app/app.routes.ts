import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { WorkoutHistoryComponent } from './history/workout-history.component';
import { StartWorkoutComponent } from './workout/start-workout/start-workout.component';
import { ChooseWorkoutComponent } from './workout/choose-program/choose-program.component';
import { ChooseExerciseComponent } from './workout/choose-exercise/choose-exercise.component';
import { DoExerciseComponent } from './workout/do-exercise/do-exercise.component';

export const routes: Routes = [
    {
        path: '', component: StartWorkoutComponent
    },
    {
        path: 'workout', component: StartWorkoutComponent,
    },
    {
        path: 'workout/selectProgram', component: ChooseWorkoutComponent
    },
    {
        path: 'workout/in-progress', component: ChooseExerciseComponent
    },
    {
        path: 'workout/exercise', component: DoExerciseComponent
    },
    {
        path: 'workout-history', component: WorkoutHistoryComponent
    },
    {
        path: 'user-profile', component: UserProfileComponent
    }
];
