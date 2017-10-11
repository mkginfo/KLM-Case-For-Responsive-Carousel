import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SlideService } from './services/slide.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CarouselComponent
      ],
      imports: [HttpModule],
      providers: [SlideService],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const slideService = fixture.debugElement.injector.get(SlideService);
    const spy = spyOn(slideService, 'fetchSlideData');
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'KLM Case For Responsive Carousel'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('KLM Case For Responsive Carousel');
  }));
});
