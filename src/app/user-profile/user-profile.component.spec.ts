import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { UserProfileComponent } from './user-profile.component'
import { User } from '../models/user'

describe('UserProfileComponent', () => {
  let component: UserProfileComponent
  let fixture: ComponentFixture<UserProfileComponent>
  let testingController: HttpTestingController

  let mockUsers: User[] = [
    {
      _id: "67acc1513f2b2bd87b67b8be",
      firstName: "Stephen",
      lastName: "Allen",
      birthDate:"05/22/1998",
      email:"Stephenallen@yahoo.com",
      height:68,
      weight:170,
    },
    {
      _id: "67acc15d3f2b2bd87b67b8c0",
      firstName: "Robert",
      lastName: "Allen",
      birthDate:"05/22/1998",
      email:"rallen@yahoo.com",
      height:68,
      weight:200,
    }
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileComponent, HttpClientTestingModule]
    })
    .compileComponents()

    fixture = TestBed.createComponent(UserProfileComponent)
    testingController = TestBed.inject(HttpTestingController)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  // it('should get all Users', () => {

  //   component.getUsers().subscribe((users: any) => {
  //     expect(users).toBeTruthy()
  //   })

  //   const mockReq = testingController.expectOne('/users')
  //   mockReq.flush(Object.values(mockUsers))
  // })
})
