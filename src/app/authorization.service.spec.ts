import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { AuthorizationService } from './authorization.service';

describe('AuthorizationService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthorizationService]
    })
  );

  it('should be created', () => {
    const service: AuthorizationService = TestBed.get(AuthorizationService);
    expect(service).toBeTruthy();
  });
});
