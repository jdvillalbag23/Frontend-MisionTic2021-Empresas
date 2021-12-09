import { TestBed } from '@angular/core/testing';

import { AutenticadoGuard } from './autenticado.guard';

describe('AutenticadoGuard', () => {
  let guard: AutenticadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutenticadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
