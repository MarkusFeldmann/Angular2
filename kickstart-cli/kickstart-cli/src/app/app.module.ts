import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TabComponent, TabsComponent} from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent, TabComponent, TabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [TabComponent, TabsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
