import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeBtnComponent } from './time-btn.component';

describe('TimeBtnComponent', () => {
  let component: TimeBtnComponent;
  let fixture: ComponentFixture<TimeBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
