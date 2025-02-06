import { Component } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'user-profile',
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  baseUrl = 'http://localhost:3000/'

  users: User[] = []


  constructor(private readonly httpClient: HttpClient) {}

  ngOnInit(): void {
    this.users = this.getUsers()
    // this.users = [this.getUserById('679e98bbb30d21c6a7218f68')]
  }

  getUsers(): User[] {
    let url = this.baseUrl + 'users/'
    let users = []

    this.httpClient.get<User[]>(url).subscribe(res => {
      let responseObject = {...res}

      for(let user of responseObject['user']) {
        users.push(user)
      }
    })

    return users
  }

  getUserById(id: string): User {
    let url = this.baseUrl + 'users/' + id + '/'
    let user: User = null

    this.httpClient.get<User>(url).subscribe(res => {
      let responseObject = {...res}

      user = responseObject['user']
    })

    return user
  }

  updateUser(id: string): void {
    console.log("hi")
    alert("Suck it bitch" + id)
  }

  deleteUser(id: string): void {
    let url = this.baseUrl + 'users/' + id + '/'

    this.httpClient.delete(url, {observe: 'response'}).subscribe({
      next: (res) => {
        alert("Response status code: " + JSON.stringify(res.status) + "\nUser " + id + " deleted successfully.")
      }
    })
  }


}
