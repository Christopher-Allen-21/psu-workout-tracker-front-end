import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DontSaveWorkoutPopupComponent } from './dont-save-workout-popup.component';

describe('DontSaveWorkoutPopupComponent', () => {
  let component: DontSaveWorkoutPopupComponent;
  let fixture: ComponentFixture<DontSaveWorkoutPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DontSaveWorkoutPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DontSaveWorkoutPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
