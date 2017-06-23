import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent implements OnChanges {
  time: any;
  maxValues= {
    hours: 23,
    minutes: 59,
    seconds: 59
  };

  @Input('time') private timeString =''; 
  @Output('timeChange') changeEvent = new EventEmitter();
  

  constructor() { 
    this.reset();
  }

  private reset(){
    this.time = {
      hours: 1,
      minutes: 2,
      seconds: 3
    }
    this.emitTimeChange();
  }

  incrementTime(field: string) {
    const maxValue = this.maxValues[field];
    this.time[field] = (this.time[field] + 1) % (maxValue +1);
    this.emitTimeChange();
  }

  decrementTime(field: string) {
    if(this.time[field] === 0) {
      this.time[field] = this.maxValues[field];
    }
    else
    {
      this.time[field] = this.time[field] - 1;
    }    
    this.emitTimeChange();
  }


  emitTimeChange() {
    this.changeEvent.emit(this.getTime());
    //console.log('pic Ausgewählte Zeit: ' + this.getTime());
  }

  ngOnChanges(changes) {
    const parts = this.timeString.split(':');
    if(parts.length === 3) {
      this.time = {
        hours: Math.min(parseInt(parts[0], 10), this.maxValues.hours),
        minutes: Math.min(parseInt(parts[1], 10), this.maxValues.minutes),
        seconds: Math.min(parseInt(parts[2], 10), this.maxValues.seconds)
      };
    }
  }


  ngOnInit() {
  }

  fillUpZeros(value) {
    return `0${value}`.slice(-2);
  }

  getTime() {
    const hours = this.fillUpZeros(this.time.hours);
    const minutes = this.fillUpZeros(this.time.minutes);
    const seconds = this.fillUpZeros(this.time.seconds);

    return `${hours}:${minutes}:${seconds}`;
  }

}
