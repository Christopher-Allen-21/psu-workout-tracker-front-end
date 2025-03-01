import { Component, importProvidersFrom } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs'
import { NgClass } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { appStateReducer } from './store/app.reducer';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatTabsModule, NgClass, RouterLinkActive],
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
