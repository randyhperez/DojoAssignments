import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-git-info',
  templateUrl: './git-info.component.html',
  styleUrls: ['./git-info.component.css']
})
export class GitInfoComponent implements OnInit {
  @Input() userObj;
  
  constructor() { }

  ngOnInit() {
  }

}
