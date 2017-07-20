import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  power: number;
  calcPower: number;

  onSubmit(event){
    event.preventDefault();
    console.log(`New power level ${ this.calcPower }`);
    this.calcPower = this.power;
  }

  constructor() { }

  ngOnInit() {
  }

}
