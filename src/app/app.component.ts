import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  htmlPercentage = 75;
  cssPercentage = 83;
  jsPercentage = 34;
  color = '#ddd';
  progressBackColor = '#333';
}
