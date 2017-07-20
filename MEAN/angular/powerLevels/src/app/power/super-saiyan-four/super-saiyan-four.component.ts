import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-four',
  templateUrl: './super-saiyan-four.component.html',
  styleUrls: ['./super-saiyan-four.component.css']
})
export class SuperSaiyanFourComponent implements OnInit {
  @Input() powerLvl;


  constructor() { }

  ngOnInit() {
    
  }
  ngOnChanges(){
    this.powerLvl = this.powerLvl * 500;
  }

}
