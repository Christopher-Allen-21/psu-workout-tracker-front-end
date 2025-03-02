import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoWorkoutComponent } from './choose-exercise.component';

describe('DoWorkoutComponent', () => {
  let component: DoWorkoutComponent;
  let fixture: ComponentFixture<DoWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoWorkoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
