import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProgramsComponent } from './programs/programs.component';
import { StartWorkoutComponent } from './workout/start-workout/start-workout.component';
import { ChooseWorkoutComponent } from './workout/choose-workout/choose-workout.component';

export const routes: Routes = [
    {
        path: '', component: StartWorkoutComponent
    },
    {
        path: 'workout', component: StartWorkoutComponent
    },
    {
        path: 'workout/select', component: ChooseWorkoutComponent
    },
    {
        path: 'programs', component: ProgramsComponent
    },
    {
        path: 'user-profile', component: UserProfileComponent
    }
];
