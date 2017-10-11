import { Component, OnInit, ViewChild, ContentChild, AfterContentInit, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ViewChildComponent } from '../view-child/view-child.component';
import { ContentChildComponent } from '../content-child/content-child.component';

@Component({
  selector: 'app-lifecycle-main',
  template: `<h3>Lifecycle-Demo</h3>
             <app-view-child [text]="text"></app-view-child><br>
             <input type="text" [(ngModel)]="text"/>
             <ng-content></ng-content>`,
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, AfterContentInit {
  @ViewChild(ViewChildComponent) viewChild;
  @ContentChild(ContentChildComponent) contentChild;
  text = "Hello Lifecycle";

  constructor() { }

  ngOnInit() {
  }

  logChildren(callback: String) {
    console.log(`---${callback}---`);
    console.log("View Child ", this.viewChild);
    console.log("Content Child ", this.contentChild);
  }

  ngAfterContentInit() {
    console.log("Lifecycle main, After Content init");
    this.logChildren('ngAfterContentInit');
  }

  ngAfterViewInit() {
    console.log("Lifecycle main, After View init");
    this.logChildren("ngAfterViewInit");
  }
}
