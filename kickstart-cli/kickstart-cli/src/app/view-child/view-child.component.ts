import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-view-child',
  template: `<h3>View Child</h3>
             <span>Text: {{text}}</span>`,
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit, OnChanges {
  @Input() text: string;

  constructor() { 
    
  }

  ngOnInit() {
    console.log("View Child onInit");
    console.log("text: " + this.text);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("View Child, ngOnChanges", changes);
    console.log("Before ", changes['text'].previousValue);
    console.log("After ", changes['text'].currentValue);
  }

}
