import { Component, OnInit } from '@angular/core';
import{ Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';
import { ApiService } from '../api.service';
import { Player } from '../player';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  id;

  constructor(private _route: ActivatedRoute) { 
    this._route.params.subscribe(param => this.id = param.id)
  }

  ngOnInit() {
    console.log(this.id)
  }


}
