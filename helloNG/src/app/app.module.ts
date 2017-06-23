import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TabsModule } from './tabs/tabs.module';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { TimePickerComponent } from './calendar/time-picker/time-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    TimePickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
