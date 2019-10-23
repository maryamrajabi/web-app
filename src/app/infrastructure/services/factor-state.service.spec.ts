import { TestBed } from '@angular/core/testing';

import { FactorStateService } from './factor-state.service';

describe('FactorStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FactorStateService = TestBed.get(FactorStateService);
    expect(service).toBeTruthy();
  });
});
