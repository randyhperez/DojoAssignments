import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Player } from './player';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  getPlayers(){

  }

  createPlayer(player): Promise<Player> {
    console.log('Service - createPlayer', player)
    return this._http.post('/api/notes', player)
      .map(data => data.json())
      .toPromise();
  }

}
