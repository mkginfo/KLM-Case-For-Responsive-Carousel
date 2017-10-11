import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SlideService {

  constructor(private http: Http) { }
  /**
   * Fetches slides data through http call
   * @return {Observable<any>} return observable
   */
  fetchSlideData(): Observable<any> {
    return this.http.get('../../assets/slidedata.json').map(response => response.json());
  }

}
