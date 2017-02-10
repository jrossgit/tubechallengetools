import {Component} from '@angular/core';

@Component({
  selector: 'timer',
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
        <button (click)="takeSplitValue();" class="timer__increment">
          Split
        </button>
        <button (click)="increment();" class="timer__split">
          Increment
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
  public timerValue:number = 0;
  splitValues = [0, 0, 0];
  
  //Button controls
  increment() {
    this.timerValue++;
  }
  takeSplitValue() {
    this.splitValues.push(this.timerValue);
  }
  
}
