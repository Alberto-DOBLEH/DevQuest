import { TestBed } from '@angular/core/testing';

import { Autenticaciones } from './autenticaciones';

describe('Autenticaciones', () => {
  let service: Autenticaciones;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Autenticaciones);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
