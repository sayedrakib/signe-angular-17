/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UpdateDBservice } from './update-database.service';

describe('UpdateDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateDBservice]
    });
  });

  it('should ...', inject([UpdateDBservice], (service: UpdateDBservice) => {
    expect(service).toBeTruthy();
  }));
});
