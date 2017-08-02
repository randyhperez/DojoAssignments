import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { Note } from '../note';
import { BehaviorSubject } from 'rxjs'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  @Input() allNotes;
  @Output() getNotesEmitter = new EventEmitter();

  constructor(private _httpService: HttpService) {

  }

  ngOnInit() {
    this.getNotesEmitter.emit();
  }

}
