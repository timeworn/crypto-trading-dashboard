import { TestBed, inject }  from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule }       from '@angular/http';

import { HttpService } from './http.service';

describe('HttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpService],
      imports: [HttpClientModule, HttpModule],
    });
  });

  it('should be created', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));
});
