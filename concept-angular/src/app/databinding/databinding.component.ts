import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  nm='codekul.com'
  amt=100
  typ="button"
  cls='btn btn-primary'
  anyThing:string

  constructor() { }

  clickMe(ev:any){
    console.log('clicked')
    console.log(ev)
  }
 
  ngOnInit() {
  }

}
