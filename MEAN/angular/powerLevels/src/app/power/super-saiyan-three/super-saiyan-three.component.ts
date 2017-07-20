import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-three',
  templateUrl: './super-saiyan-three.component.html',
  styleUrls: ['./super-saiyan-three.component.css']
})
export class SuperSaiyanThreeComponent implements OnInit {
  @Input() powerLvl;

  ngOnChanges(){
    this.powerLvl = this.powerLvl * 250;
  }

  constructor() { }

  ngOnInit() {
  }

}
