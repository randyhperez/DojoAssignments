import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  allPlayers: Array<Player> = [];

  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this.getPlayers()
  }

  getPlayers(){
    console.log('ListComponent - getPlayers')
    this._apiService.getPlayers()
      .then(players => this.allPlayers = players)
      .catch(error => console.log(error));
  }

  destroy(player, index){
    console.log('ListComponent - destroy', player)
    this._apiService.removePlayer(player._id)
      .then(() => this.allPlayers.splice(this.allPlayers.indexOf(player), 1))
      .catch(error => console.log(error))
  }

}
