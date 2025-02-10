import { Component } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'user-profile',
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  baseUrl = 'http://localhost:3000/'

  users: User[] = []

  firstNameInput: string
  lastNameInput: string
  birthDateInput: string
  emailInput: string
  heightInput: number
  weightInput: number

  updateIdInput: string
  updateFirstNameInput: string
  updateLastNameInput: string
  updateBirthDateInput: string
  updateEmailInput: string
  updateHeightInput: number
  updateWeightInput: number


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

  createUser(): void {
    let url = this.baseUrl + 'users/'

    let request: User = {
      _id: null,
      firstName: this.firstNameInput,
      lastName: this.lastNameInput,
      birthDate: this.birthDateInput,
      email: this.emailInput,
      height: this.heightInput,
      weight: this.weightInput
    }

    this.httpClient.post(url, request, {observe: 'response'}).subscribe({
      next: (res) => {
        alert("Response status code: " + JSON.stringify(res.status) + "\nUser created successfully.")
      }
    })
  }

  updateUser(): void {
    let url = this.baseUrl + 'users/' + this.updateIdInput + '/'

    let request: User = {
      _id: this.updateIdInput,
      firstName: this.updateFirstNameInput,
      lastName: this.updateLastNameInput,
      birthDate: this.updateBirthDateInput,
      email: this.updateEmailInput,
      height: this.updateHeightInput,
      weight: this.updateWeightInput
    }

    this.httpClient.put(url, request, {observe: 'response'}).subscribe({
      next: (res) => {
        alert("Response status code: " + JSON.stringify(res.status) + "\nUser " + this.updateIdInput + " updated successfully.")
      }
    })
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
