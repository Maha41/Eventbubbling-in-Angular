import { Component, OnInit } from '@angular/core';

import { EventchildComponent } from './../eventchild/eventchild.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  
  content = '<a href="http://google.com">Click Here</span></a>'; 
  constructor() { }

  ngOnInit() {
  }

  doSomething(e) {
    let target = e.target;

    while (target !== e.currentTarget) {
     
      target = target.parentNode;
    }

    alert('Event reached Parent!!! Now you are permitted to google')
  }
}
 

