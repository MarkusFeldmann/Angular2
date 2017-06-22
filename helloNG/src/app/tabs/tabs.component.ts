import { Component, OnInit, Input, AfterContentInit, ContentChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `<div *ngIf='active' class='tab-content'>
                <ng-content></ng-content>
             </div>`
})
export class TabComponent {
  active: boolean;
  @Input() title;

  constructor() { 
    this.active = false;
  }
}

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit
{
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  ngAfterContentInit() {
    this.tabs.first.active = true;
  }

  activate(tab_) {
    for(const t of this.tabs.toArray()) {
      t.active = false;
    }
    tab_.active = true;
  }

}