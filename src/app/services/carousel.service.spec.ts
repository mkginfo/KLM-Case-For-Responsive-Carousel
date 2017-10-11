import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { CarouselService } from './carousel.service';

describe('SlideService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarouselService],
      imports: [HttpModule],
    });
  });

  it('should be created', inject([CarouselService], (service: CarouselService) => {
    expect(service).toBeTruthy();
  }));
});
