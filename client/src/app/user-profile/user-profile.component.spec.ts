import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileComponent } from './user-profile.component';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);

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
      imports: [UserProfileComponent],
      providers: [{ provide: HttpClient, useValue: httpClientSpy }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return data for abc endpoint', () => {
    component.getUsers().subscribe(data => expect(data.status).toBe(200));
  });
});
