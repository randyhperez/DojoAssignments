import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  player: Player = new Player();

  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(event){
    event.preventDefault()
    console.log('onSubmit', this.player)
    this._apiService.createPlayer(this.player)
      .then(() => {
        console.log('Success creating Player')
        this._router.navigate(['players/list'])
      })
      .catch(error => console.log(error));
    this.player = new Player();
  }

}
