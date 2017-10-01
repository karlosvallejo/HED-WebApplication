import { TestBed, inject } from '@angular/core/testing';

import { GeneralServices } from './services.service';

describe('GeneralServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneralServices]
    });
  });

  it('should be created', inject([GeneralServices], (service: GeneralServices) => {
    expect(service).toBeTruthy();
  }));
});
