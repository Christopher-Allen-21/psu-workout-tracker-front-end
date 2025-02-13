import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs'


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatTabsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client';
  todaysDate: string

  routerLinks: string[] = [
    'workout',
    'programs',
    'user-profile'
  ]

  constructor() {

  }


}
