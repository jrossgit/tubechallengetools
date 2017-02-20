/**
 * Created by User on 20/02/2017.
 */

let timeSubdivisions = function(milliseconds: number, subdivision: number) : number {
  return Math.floor(milliseconds / subdivision)
};

let msToSeconds = function(milliseconds: number) : number {return Math.floor(milliseconds)};

let durationToString = function(milliseconds: number): string {
    let output = [1000*60*60, 1000*60, 1000].map((time) => (timeSubdivisions(milliseconds, time)));
  return output[0] + ':' + output[1] + ':' + output[2];
};


export class Timer {
  startTime: Date;
  stopTime: Date;
  stoppedElapsed: number;
  running: boolean;

  constructor() {
    this.startTime = new Date();
    this.running = false;
  }

  start() {
    this.startTime =  new Date();
    this.running = true;
  }

  split() {
    return timeSubdivisions(this.getTimeMs(), 1000)
  }

  stop() {
    this.stoppedElapsed = this.getTimeMs();
    this.stopTime = new Date();
    this.running = false;
    return this.stoppedElapsed;
  }

  reset() {

    this.running = false;
  }

  getTimeMs() {
    return +this.stopTime - +this.startTime
  }
}

