import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MatTabsModule } from '@angular/material/tabs'


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, UserProfileComponent, MatTabsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';
  routerLinks: string[] = [
    'workout',
    'programs',
    'user-profile'
  ]




}
