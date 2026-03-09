import { TestBed } from '@angular/core/testing';

import { CategoryBtnService } from './category-btn.service';

describe('CategoryBtnService', () => {
  let service: CategoryBtnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryBtnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
