import { TestBed, async, inject } from '@angular/core/testing';

import { ExchangeRouteGuard } from './exchange-route.guard';

describe('ExchangeRouteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExchangeRouteGuard]
    });
  });

  it('should ...', inject([ExchangeRouteGuard], (guard: ExchangeRouteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
