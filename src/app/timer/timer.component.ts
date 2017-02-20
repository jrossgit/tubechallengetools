import {Component} from '@angular/core';

import {Timer} from './timer.timer';
import {TimerService} from './timer.service';

@Component({
  selector: 'timer',
  providers: [TimerService],
  styles: [`
    .timer {
      position: relative;
    }
    .timer__input {
      border: #00000;
      border-radius: 3px;
      height: 30px;
      text-align: center;
      width: 100%;
    }
    .timer__button {
      outline: 0;
      cursor: pointer;
      height: 30px;
      width: 84px;
      border: 0;
      border-radius: 3px;
      background: #0088cc;
      color: #fff;
    }
    /*.timer__splits {
      height: 30px;
      border: 0;
      border-radius: 3px;
      background: #0088ff;
    }*/
  `],
  template: `
    <div class="timer">
      <div class="timer__display">
        <input type="text" class="timer__input" [value]="timerValue">
      </div>
      <div class="timer__controls">
        <button (click)="startTimer();" class="timer__increment">
          Start
        </button>
        <button (click)="splitTimer();" class="timer__split">
          Split
        </button>
      </div>
        <table>
          <tr *ngFor="let split of splitValues;  let i=index">
            <td><input type="text" ></td>
           <td>{{split}}</td>
          </tr>
        </table>

    </div>
  `
})
export class TimerComponent {
  timer: Timer;
  splitValues = [0];

  constructor(timerService: TimerService) {
    this.timer = timerService.getTimer();
  }

  //Button controls
  startTimer() {
    this.timer.start();
  }
  splitTimer() {
    this.splitValues.push(this.timer.split());
  }


  //Button controls
  // increment() {
  //   this.timerValue++;
  // }
  // takeSplitValue() {
  //   this.splitValues.push(this.timerValue);
  // }

}
