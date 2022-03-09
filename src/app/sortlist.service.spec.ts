import { TestBed } from '@angular/core/testing';

import { SortlistService } from './sortlist.service';

describe('SortlistService', () => {
  let service: SortlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
