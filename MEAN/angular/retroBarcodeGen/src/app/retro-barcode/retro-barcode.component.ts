import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retro-barcode',
  templateUrl: './retro-barcode.component.html',
  styleUrls: ['./retro-barcode.component.css']
})

export class RetroBarcodeComponent {
  colorArr: Array<string> = ['Red', 'Crimson', 'GoldenRod', 'Yellow', 'OrangeRed', 'Orange'];
  randomArr: Array<string> = [];


  arrPusher(){
    for (let roll = 0; roll < 20; roll++){
      let random = (Math.floor(Math.random() * this.colorArr.length))
      this.randomArr.push(this.colorArr[random])
    }
  }

   ngOnInit() {
    this.arrPusher();
  }

}
