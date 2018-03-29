import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-eventchild',
  templateUrl: './eventchild.component.html',
  styleUrls: ['./eventchild.component.css']
})
export class EventchildComponent implements OnInit {
  message :string ;

  content = '<a href="http://google.com">Link text <span>Nested text</span></a>';
  constructor() {
    this.message = 'Child event triggered';
   }

  ngOnInit() {
  }

}
