import { Component } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'user-profile',
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  users: User[] = [
    {
      firstName: "Robert",
      lastName: "Allen",
      birthDate: "05/22/1998",
      email: "rallen7908@yahoo.com"
    },
    {
      firstName: "Stephen",
      lastName: "Allen",
      birthDate: "05/22/1998",
      email: "sallen7908@yahoo.com"
    },
    {
      firstName: "Chris",
      lastName: "Allen",
      birthDate: "03/22/1996",
      email: "callen7908@yahoo.com",
      height: 69,
      weight: 190,
    }
  ]

  constructor(){}
}
