import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  min = new FormControl(0);
  max = new FormControl(10);
  randomNumber: number;
  secondNumber: number;
  twoNums = false;

  ngOnInit(): void {
    this.updateNumber();
  }

  getRandomInt(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  updateNumber(): void {
    this.randomNumber = this.getRandomInt(this.min.value, this.max.value);
    this.secondNumber = this.getRandomInt(this.min.value, this.max.value);
  }

}
