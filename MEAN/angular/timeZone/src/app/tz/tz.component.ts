import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tz',
  templateUrl: './tz.component.html',
  styleUrls: ['./tz.component.css']
})
export class TzComponent implements OnInit {
  today = new Date();

  getTZ(tz){
    this.today = new Date();
    if (tz === 'CST'){
      this.today.setHours(this.today.getHours() -1)
    }
    else if (tz ==='MST'){
      this.today.setHours(this.today.getHours() -2)
    }
    else if (tz === 'PST') {
      this.today.setHours(this.today.getHours() -3)
    }
  }

  getTZest(){
    this.today = new Date();
  }
  
  constructor() { }

  ngOnInit() {
  }

}
