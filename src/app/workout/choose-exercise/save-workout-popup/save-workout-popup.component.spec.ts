import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveWorkoutPopupComponent } from './save-workout-popup.component';

describe('SaveWorkoutPopupComponent', () => {
  let component: SaveWorkoutPopupComponent;
  let fixture: ComponentFixture<SaveWorkoutPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaveWorkoutPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveWorkoutPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
