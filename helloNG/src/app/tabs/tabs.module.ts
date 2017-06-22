import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabsComponent, TabComponent} from './tabs.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TabComponent, TabsComponent],
  exports: [TabComponent, TabsComponent]
})
export class TabsModule { }
