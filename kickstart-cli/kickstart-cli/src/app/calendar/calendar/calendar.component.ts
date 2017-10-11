import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { TimePickerComponent } from '../time-picker/time-picker.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements AfterViewInit {
  calendarEntry: any;

  @ViewChild('timepicker') timePicker: TimePickerComponent;

  constructor() { 
    this.calendarEntry = {startTime: '21:22:33'};
  }

  ngAfterViewInit() {
    console.log('cal Ausgewählte Zeit: ' + this.timePicker.getTime());
  }

}
