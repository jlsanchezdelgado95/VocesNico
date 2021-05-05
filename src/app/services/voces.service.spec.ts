import { TestBed } from '@angular/core/testing';

import { VocesService } from './voces.service';

describe('VocesService', () => {
  let service: VocesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VocesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
