import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-al',
  template: `
  <p class="alert alert-primary" role="alert">
  Codekul-Angular training in Pune
</p>
  `,
  styles: []
})
export class MyAlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
