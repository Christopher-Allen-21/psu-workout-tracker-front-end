import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { WorkoutComponent } from './workout/workout.component';
import { ProgramsComponent } from './programs/programs.component';

export const routes: Routes = [
    {
        path: '', component: WorkoutComponent
    },
    {
        path: 'workout', component: WorkoutComponent
    },
    {
        path: 'programs', component: ProgramsComponent
    },
    {
        path: 'user-profile', component: UserProfileComponent
    }
];
