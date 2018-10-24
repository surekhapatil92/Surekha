import { Component, OnInit, Input } from '@angular/core';
import { Crd } from './crd';

@Component({
  selector: 'app-mx-crd',
  templateUrl: './mx-crd.component.html',
  styleUrls: ['./mx-crd.component.css']
})
export class MxCrdComponent implements OnInit {
  @Input()
  crd:Crd

  constructor() { }

  ngOnInit() {
  }
  goSm(crd:Crd){
    console.log(`Title is ${crd.ttl}`)

  }

}
