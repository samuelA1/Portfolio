import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  toggleshow = true;

  constructor() {
    this.toggleshow = false;
  }

  toggle() {
    this.toggleshow =! this.toggleshow;
  }
}
