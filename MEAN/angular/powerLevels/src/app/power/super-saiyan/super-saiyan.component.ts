import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan',
  templateUrl: './super-saiyan.component.html',
  styleUrls: ['./super-saiyan.component.css']
})
export class SuperSaiyanComponent implements OnInit {
  @Input() powerLvl;

  ngOnChanges(){
    this.powerLvl = this.powerLvl * 90;
  }

  constructor() { }

  ngOnInit() {
  }

}
