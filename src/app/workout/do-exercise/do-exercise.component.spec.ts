import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoExerciseComponent } from './do-exercise.component';

describe('DoExerciseComponent', () => {
  let component: DoExerciseComponent;
  let fixture: ComponentFixture<DoExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoExerciseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
