/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HomeProjectService } from './home-project.service';

describe('HomeProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeProjectService]
    });
  });

  it('should ...', inject([HomeProjectService], (service: HomeProjectService) => {
    expect(service).toBeTruthy();
  }));
});
