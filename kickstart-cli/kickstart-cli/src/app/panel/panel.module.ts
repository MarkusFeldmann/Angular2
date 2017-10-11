import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent, PanelHeaderDirective } from './panel.component';
import { BorderDirective } from './border.directive';

// Um Decorators benutzen zu können muss CommonModule im bereitstellenden Modul importiert werden

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PanelComponent, PanelHeaderDirective, BorderDirective],
  exports: [PanelComponent, PanelHeaderDirective]
})
export class PanelModule { }
