# Pure CSS Responsive Carousel

An Amazing, Lightweight, Pure CSS based Fully Responsive Carousel for angular 4 and has no jQuery dependency.
It have multiple options to control the carousel and also it is very simple to get started. 

This is responsive and asynchronous carousel using Angular 4, Type script, HTML5 and CSS3.
It is an fully responsive carousel component with full controls which loads its content via HTTP service asynchronously. It play automatically (autoplay) with given interval as well as with user navigation.

# Technology Stack

Web Languages - HTML5, CSS3, Javascript, Angular 4, Angular CLI, NPM, Typescript

Testing Frameworks- Protractor, Karma, Jasmine 

Repository Tools - Git, GitHub


## Static Code - PureCSSResponsiveCarosuel
I have also created the HTML version of the carousel with pure CSS without using any JavaScript or jquery.
It is placed in folder `PureCSSResponsiveCarosuel` in project directory.

Go and try this angular 4 respoincive carousel.

## Components

1) Responsive Carousel with controls
2) Responsive Menubar

# Screenshot

Desktop 1024px - 

![](https://raw.githubusercontent.com/mkginfo/KLM-Case-For-Responsive-Carousel/master/screenshot/1024.PNG "Desktop 1024px")

Tablet 768px - 

![](https://raw.githubusercontent.com/mkginfo/KLM-Case-For-Responsive-Carousel/master/screenshot/768.PNG "Tablet 768px")

Mobile 320px -

![](https://raw.githubusercontent.com/mkginfo/KLM-Case-For-Responsive-Carousel/master/screenshot/320.PNG "Mobile 320px")


# Get Started

## Clone the git repository

Run `git clone git@github.com:kingmahendra/KLM-Case-Assignment.git` command

## Install Node Dependencies

Run `npm install` command

## Start development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 

## Build

Run `ng build` to build the project. 
The build artifacts will be stored in the `dist/` directory. 
Use the `-prod` flag for a production build.

# Testing
Tested with unit test and end to end test. With help of webpack bundler this project builds an optimized and efficient carousel component.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

# Documentation

## Rssponsive Menubar Style

```html
  <link rel="stylesheet" type="text/css" href="assets/css/style.css">
```

## Rssponsive Carousel HTML

```html
<nav>
    <label for="show-menu" class="show-menu">&#9776;</label>
    <label class="show-menu flag mobile-visibility-hidden"></label>        
    <label class="show-menu user mobile-visibility-hidden"></label>
    <input type="checkbox" id="show-menu" role="button">
    <ul id="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Plan en boek</a></li>
        <li><a href="#">Bereid uw reis voor</a></li>
        <li><a href="#">Flying Blue</a></li>
        <li><a href="#">KLM zakelijk</a></li>
        <li><a href="#">Over KLM</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

## Rssponsive Carousel Style

```html
<link rel="stylesheet" type="text/css" href="assets/css/carousel.css">
```

## Carousel service

```js 
  fetchCarouselData(): Observable<any> {
    return this.http.get('../../assets/data.json').map(response => response.json());
  }
```

## Carousel Controls

Moves to previous slide

```js 
   prevSlides() {
    if (this.autoPlay) {
      clearInterval(this.interval);
      this.showSlides(this.slideIndex -= 2)
    } else {
      this.showSlides(this.slideIndex -= 1);
    }
  }
```

Moves to next slide

```js  
   nextSlides() {
    this.showSlides(this.slideIndex += 1);
  }

```
Show the slide when clicking on bullet indicator on carousel
@param {[number]} n Index of the slide in data array

```js 
  currentSlide(n) {
    if (window.innerWidth < 321) {  // disble click on bullet in mobile device
      return;
    }
    this.showSlides(this.slideIndex = n);
  }
```

Setup the auto play for the carousel
@param {[numer]} ms Time interval in milliseconds

```js 
  auto(ms) {
    this.autoPlay = true;
    this.intervalTime = ms;
    this.slideIndex++ ;
    this.interval = setInterval(this.showSlides.bind(this, this.slideIndex), ms);
  }
```

Handler for toggle pause/play button

```js  
  toggleAuto() {
    this.autoPlay = !this.autoPlay;
  }
```

Handler for mouse enter event which makes control visible on large screen

```js   
  onMouseEnter() {
    if (window.innerWidth < 769) {
      return;
    }
    //this.controlsVisible = 'visible';
  }
```
Handler for mouse leave event which makes control hidden on large screen

```js 
  onMouseLeave() {
    if (window.innerWidth < 769) {
      return;
    }
    //this.controlsVisible = 'hidden';
  }
```


