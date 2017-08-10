import { Component, OnInit } from '@angular/core';
import{ Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';
import { ApiService } from '../../api.service';
import { Player } from '../../player';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  allPlayers: Array<Player> = [];
  subscription: Subscription;
  id: string = ''
  

  constructor(private _route: ActivatedRoute, private _apiService: ApiService) { 
    this._route.params.subscribe(params => this.id = params.id)
  }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers(){
    console.log('ListComponent - getPlayers')
    this._apiService.getPlayers()
      .then(players => this.allPlayers = players)
      .catch(error => console.log(error));
  }

  update(player, status: string) {
    if (this.id === '1'){
      player.gw1 = status;
    }
    else if (this.id === '2'){
      player.gw2 = status;
    }
    else if (this.id === '3'){
      player.gw3 = status;
    }
    console.log('StatusComponent -', player)
    this._apiService.updatePlayer(player._id, player)
      .then(result => console.log('result is', result))
      .catch(error => console.log(error))
  }

}
