/**
 * Created by User on 20/02/2017.
 */

import { Injectable } from '@angular/core';

import { Timer } from './timer.timer';

@Injectable()
export class TimerService {
  getTimer() { return new Timer(); }
}
