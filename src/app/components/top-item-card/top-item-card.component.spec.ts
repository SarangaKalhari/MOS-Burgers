import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopItemCardComponent } from './top-item-card.component';

describe('TopItemCardComponent', () => {
  let component: TopItemCardComponent;
  let fixture: ComponentFixture<TopItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopItemCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
