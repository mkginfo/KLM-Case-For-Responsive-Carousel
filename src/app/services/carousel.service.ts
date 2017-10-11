import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CarouselService {
  
  constructor(private http: Http) { }
  /**
   * Fetches ca data through http call
   * @return {Observable<any>} return observable
   */
  
  fetchCarouselData(): Observable<any> {
    return this.http.get('../../assets/data.json').map(response => response.json());
  }

}
