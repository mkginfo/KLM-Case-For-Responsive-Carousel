import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { SlideService } from './slide.service';

describe('SlideService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlideService],
      imports: [HttpModule],
    });
  });

  it('should be created', inject([SlideService], (service: SlideService) => {
    expect(service).toBeTruthy();
  }));
});
