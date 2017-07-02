import {Component} from '@angular/core';
import {TestAPI} from './shared/testapi';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})

export class AppComponent {
  title = 'Silex-Angular HTTP/2 REST API test';
  first = {};
  second = {};
  third = {};

  constructor(private apiService: TestAPI) {
  }

  test() {
    this.apiService.first().subscribe(data => this.first = data);
    this.apiService.second().subscribe(data => this.second = data);
    this.apiService.third().subscribe(data => this.third = data);
  }
}
