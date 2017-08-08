import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Player } from '../player';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
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

  update(player, status: string) {
    player.action = status
    console.log('StatusComponent -', player)
    this._apiService.updatePlayer(player._id, player)
      .then(result => console.log('result is', result))
      .catch(error => console.log(error))
  }

}
