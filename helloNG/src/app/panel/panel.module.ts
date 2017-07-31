import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent, PanelHeaderDirective } from './panel.component';
import { BorderDirective } from './border.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PanelComponent, PanelHeaderDirective, BorderDirective],
  exports: [PanelComponent, PanelHeaderDirective]
})
export class PanelModule { }
