import {async, fakeAsync, TestBed, tick, ComponentFixture} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HeaderComponent} from './header.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('HeaderComponent', () => {

  let headerComponent: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let expected = "";
  
  beforeEach(async(() => {
    expected = "Headre Section";
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [],
      providers: [],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    headerComponent = fixture.componentInstance;
    fixture.detectChanges();
  });
  
    afterEach(() => {
      expected = "";
    });
  
    it('says Hedder Section', () => {
      expect(headerComponent.headersection())
          .toEqual(expected);
    });
  });
