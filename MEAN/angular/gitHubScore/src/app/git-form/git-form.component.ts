import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-git-form',
  templateUrl: './git-form.component.html',
  styleUrls: ['./git-form.component.css']
})
export class GitFormComponent implements OnInit {
  @Output() newUserEmitter = new EventEmitter();
  
  username: string = "";

  onSubmit(){
    console.log(this.username);
    this.newUserEmitter.emit(this.username);
  }

  constructor() { }

  ngOnInit() {
  }

}
