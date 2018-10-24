import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prg-br',
  template: `
  <div class="progress">
  <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>
  `,
  styles: []
})
export class PrgBrComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
