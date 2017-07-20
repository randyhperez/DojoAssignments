import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css']
})
export class SaiyanComponent implements OnInit {
  @Input() powerLvl;

  ngOnChanges(){
    this.powerLvl = this.powerLvl * 10;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
