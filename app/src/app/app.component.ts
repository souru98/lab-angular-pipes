import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  clickCounter: number = 0;
  number1: number = 0;
  number: number = 0;
  name: string = '';

  click(num): void {
    this.number = num;
  }

  numbers(currency: number): void {
    this.number = currency;
  }

  pipes(name: string): void {
    this.name = name;
  }

  numbers1(number): void {
    this.number1 = number;
  }
}
