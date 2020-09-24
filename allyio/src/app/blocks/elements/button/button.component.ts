import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Input() type: string;
  @Input() classList: string;
  @Input() disabled;

  constructor() {
    this;
  }

  ngOnInit() {
    this;
  }

}
