import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchboard',
  templateUrl: './switchboard.component.html',
  styleUrls: ['./switchboard.component.css']
})
export class SwitchboardComponent implements OnInit {
  buttons: Array<boolean> = [true, true, true, true, true, true, true, true, true, true];

  buttonClick(idx){
    if(this.buttons[idx]){
      this.buttons[idx] = false;
    }
    else {
      this.buttons[idx] = true;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
