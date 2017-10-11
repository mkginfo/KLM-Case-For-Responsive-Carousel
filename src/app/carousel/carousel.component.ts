import { Component, AfterViewInit, Input, OnInit, HostListener} from '@angular/core';
import { SlideService } from '../services/slide.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterViewInit, OnInit {
  slidesData: any;
  slideIndex = 0;
  current = {};
  autoPlay = true;
  intervalTime = 2000;
  interval: any;
  controlsVisible = 'hidden';

  /**
   * Listen to the window resize event and set the visiblity of controls
   * @param {resize'} 'window    window resize event
   * @param {[event]}  '$event']) onWindowResize( event object
   */
  @HostListener('window:resize', ['$event']) onWindowResize() {
    if (window.innerWidth < 769) {
      this.controlsVisible = 'visible';
    }else {
      this.controlsVisible = 'hidden';
    }

  }
  constructor(private slideService: SlideService) {

  }

  /**
   * Initialize the component and  control visiblity
   */
  ngOnInit() {
   if (window.innerWidth < 769) {
     this.controlsVisible = 'visible';
   }
  }

  /**
   * Fetch data from the service and start the slice show
   */
  ngAfterViewInit() {
     this.slideService.fetchSlideData()
     .subscribe(data => {
        this.slidesData = data;
        // this.current = this.slidesData[this.slideIndex];
        this.showSlides(this.slideIndex);

     }, (error) => {console.log(error) });

  }

  /**
   * Display the image in the slide by setting current slide
   * @param {[number]} n current index of the slide
   */
  showSlides(n) {
    if (n > this.slidesData.length - 1) { this.slideIndex = 0 }
    if (n < 0) { this.slideIndex = this.slidesData.length - 1 }

    this.current = this.slidesData[this.slideIndex]

    if (this.autoPlay) {
      clearInterval(this.interval);
      this.auto(this.intervalTime);
    };
  }

  /**
   * Moves to previous slide
   */
  prevSlides() {
    if (this.autoPlay) {
      clearInterval(this.interval);
      this.showSlides(this.slideIndex -= 2)
    } else {
      this.showSlides(this.slideIndex -= 1);
    }
  }

  /**
   * Moves to next slide
   */
  nextSlides() {
    this.showSlides(this.slideIndex += 1);
  }

  /**
   * Show the slide when clicking on bullet indicator on carousel
   * @param {[number]} n Index of the slide in data array
   */
  currentSlide(n) {
    if (window.innerWidth < 321) {  // disble click on bullet in mobile device
      return;
    }
    this.showSlides(this.slideIndex = n);
  }

 /**
  * Setup the auto play for the carousel
  * @param {[numer]} ms Time interval in milliseconds
  */
  auto(ms) {
    this.autoPlay = true;
    this.intervalTime = ms;
    this.slideIndex++ ;
    this.interval = setInterval(this.showSlides.bind(this, this.slideIndex), ms);
  }

  /**
   * Handler for toggle pause/play button
   */
  toggleAuto() {
    this.autoPlay = !this.autoPlay;
  }

   /**
   * Handler for mouse enter event which makes control visible on large screen
   */
  onMouseEnter() {
    if (window.innerWidth < 769) {
      return;
    }
    this.controlsVisible = 'visible';
  }

   /**
   * Handler for mouse leave event which makes control hidden on large screen
   */
  onMouseLeave() {
    if (window.innerWidth < 769) {
      return;
    }
    this.controlsVisible = 'hidden';
  }

}
