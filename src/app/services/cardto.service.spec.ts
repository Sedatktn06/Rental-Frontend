import { TestBed } from '@angular/core/testing';

import { CardtoService } from './cardto.service';

describe('CardtoService', () => {
  let service: CardtoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardtoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
