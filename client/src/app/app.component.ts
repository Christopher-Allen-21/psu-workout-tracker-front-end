import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MatTabsModule } from '@angular/material/tabs'
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, UserProfileComponent, MatTabsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [DatePipe]
})
export class AppComponent {
  title = 'client';
  todaysDate

  routerLinks: string[] = [
    'workout',
    'programs',
    'user-profile'
  ]

  constructor(private datePipe: DatePipe){
    this.todaysDate = this.datePipe.transform(new Date(), 'yyyy');
  }


}
