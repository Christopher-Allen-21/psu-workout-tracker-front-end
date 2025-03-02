import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { StartWorkoutComponent } from './start-workout.component'
import { Location } from '@angular/common'
import { Router } from '@angular/router'

describe('StartWorkoutComponent', () => {
  let component: StartWorkoutComponent
  let fixture: ComponentFixture<StartWorkoutComponent>
  let router: Router
  let location: Location

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StartWorkoutComponent, 
        RouterTestingModule.withRoutes([
          { path: 'test-route', component: StartWorkoutComponent }
        ])
      ],
    })
    .compileComponents()

    fixture = TestBed.createComponent(StartWorkoutComponent)
    component = fixture.componentInstance
    router = TestBed.inject(Router)
    location = TestBed.inject(Location)
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should navigate to the select workout page', async() => {      
    const spy = spyOn(router, 'navigateByUrl')

    component.startWorkout()
    const url = spy.calls.first().args[0]

    expect(url).toBe('workout/selectProgram')
  })


})
