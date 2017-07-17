import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent, TabComponent } from './tabs.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TabComponent, TabsComponent],
  exports: [TabComponent, TabsComponent]
})
export class TabsModule { }

interface Monument {
  name: string;
  height: number;
}

class bla {
  calc() {
    var m: Monument[] = [];
    m.push({ name: 'ABC', height: 999.0});
    m.push({ name: 'DEF', height: 99.0});
    var orderedMs = m.sort(this.cmpMonument);
  }

  cmpMonument(m1: Monument, m2: Monument)
  {
    if(m1.height > m2.height) return -1;
    if(m1.height < m2.height) return 1;
    return 0;
  }
}
