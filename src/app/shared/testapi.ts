import {Component, Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  providers: [Http]
})

@Injectable()
export class TestAPI {
  constructor(private http: Http) {
  }

  first() {
    return this.http.get(`https://mordred.hu/api/first`)
      .map((res: Response) => res.json());
  }

  second() {
    return this.http.get(`https://mordred.hu/api/second`)
      .map((res: Response) => res.json());
  }

  third() {
    return this.http.get(`https://mordred.hu/api/third`)
      .map((res: Response) => res.json());
  }

}

