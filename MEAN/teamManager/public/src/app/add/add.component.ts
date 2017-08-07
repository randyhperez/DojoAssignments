import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  player: Player = new Player();

  constructor(private _apiService: ApiService) { }

  ngOnInit() {
  }

  onSubmit(){
    event.preventDefault()
    console.log('onSubmit', this.player)
    // this._apiService.createPlayer(this.player)
    //   .then()
    //   .catch();
    // this.player = new Player();
  }

}
