import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Player } from './player';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  getPlayers(){
    console.log('Service - getPlayers')
    return this._http.get('/api/player')
      .map(data => data.json())
      .toPromise();
  }

  createPlayer(player: Player): Promise<Player> {
    console.log('Service - createPlayer', player)
    return this._http.post('/api/player', player)
      .map(data => data.json())
      .toPromise();
  }

  removePlayer(playerId: string): Promise<Player> {
    console.log('Service - removePlayer', playerId)
    return this._http.delete(`/api/player/${ playerId }`)
      .map(data => data.json())
      .toPromise();
  }

  updatePlayer(id: string, player: Player): Promise<Player> {
    console.log('Service - updatePlayer', id, player)
    return this._http.put(`/api/player/${ id }`, player)
      .map(data => data.json())
      .toPromise();
  }

}
