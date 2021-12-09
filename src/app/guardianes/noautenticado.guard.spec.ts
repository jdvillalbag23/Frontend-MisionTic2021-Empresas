import { TestBed } from '@angular/core/testing';

import { NoautenticadoGuard } from './noautenticado.guard';

describe('NoautenticadoGuard', () => {
  let guard: NoautenticadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoautenticadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
