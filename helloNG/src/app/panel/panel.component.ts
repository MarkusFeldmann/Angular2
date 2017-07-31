import { Component, OnInit, Input, Directive } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})

export class PanelComponent implements OnInit {
  open = true;
  borderWidth = 1;
  @Input() title: string;
  togglePanel() {
    this.open = !this.open;
  }
  constructor() { }

  ngOnInit() {
  }
}

@Directive({
  selector: 'app-panel-header'
})
export class PanelHeaderDirective {}
