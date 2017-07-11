import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})

export class PanelComponent implements OnInit {
  open = true;
  @Input() title: string;
  togglePanel() {
    this.open = !this.open;
  }
  constructor() { }

  ngOnInit() {
  }

}
