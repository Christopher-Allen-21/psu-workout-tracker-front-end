// import { ComponentFixture, TestBed } from '@angular/core/testing'
// import { RouterTestingModule } from '@angular/router/testing'

// import { ChooseWorkoutComponent } from './choose-workout.component'
// import { Location } from '@angular/common'
// import { Router } from '@angular/router'
// import { Program } from '../../models/program'

// describe('StartWorkoutComponent', () => {
//   let component: ChooseWorkoutComponent
//   let fixture: ComponentFixture<ChooseWorkoutComponent>
//   let router: Router
//   let location: Location

//   let mockProgram: Program = {
//     id: '789',
//     name: 'Legs',
//     description: 'Workout focusing on legs',
//     bodyArea: ['Legs'],
//     timesCompleted: 0,
//     workouts: [''],
//     musclesUsed: null
//   }

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         ChooseWorkoutComponent, 
//         RouterTestingModule.withRoutes([
//           { path: 'test-route', component: ChooseWorkoutComponent }
//         ])
//       ],
//     })
//     .compileComponents()

//     fixture = TestBed.createComponent(ChooseWorkoutComponent)
//     component = fixture.componentInstance
//     router = TestBed.inject(Router)
//     location = TestBed.inject(Location)
//     fixture.detectChanges()
//   })

//   it('should create', () => {
//     expect(component).toBeTruthy()
//   })

//   it('should navigate to the workout page', async() => {      
//     const spy = spyOn(router, 'navigateByUrl')

//     component.returnToStartWorkout()
//     const url = spy.calls.first().args[0]

//     expect(url).toBe('workout')
//   })

//   it('should navigate to the workout in progress page', async() => {      
//     const spy = spyOn(router, 'navigateByUrl')

//     component.startChosenWorkout(mockProgram)
//     const url = spy.calls.first().args[0]

//     expect(url).toBe('workout/in-progress')
//   })


// })
