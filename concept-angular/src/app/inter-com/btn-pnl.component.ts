import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-pnl',
  template: `
  <button type="button" class="btn btn-success" (click)="forbtn(1)">Plus</button>
  <button type="button" class="btn btn-danger" (click)="forbtn(2)">Minus</button>
  `,
  styles: []
})
export class BtnPnlComponent implements OnInit {
   
 @Output()
 onBtn:EventEmitter<number>=new EventEmitter
  constructor() { }

  ngOnInit() {
  }

}
