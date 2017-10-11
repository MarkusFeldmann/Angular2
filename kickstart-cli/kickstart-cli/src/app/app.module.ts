import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TabsModule } from './tabs/tabs.module';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { TimePickerComponent } from './calendar/time-picker/time-picker.component';
import { PanelModule } from './panel/panel.module';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { ViewChildComponent } from './view-child/view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    TimePickerComponent,
    LifecycleComponent,
    ContentChildComponent,
    ViewChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TabsModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
