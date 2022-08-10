import { TestBed } from '@angular/core/testing';

import { QuerySearchParamsService } from './query-search-params.service';

describe('QuerySearchParamsService', () => {
  let service: QuerySearchParamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuerySearchParamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
