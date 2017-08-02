import { Component, OnInit } from '@angular/core';
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
  notes: Array<Note> = [];
  subscription: Subscription;

  constructor(private _httpService: HttpService) {

  }



  ngOnInit() {
    this.getNotes();
  }

  getNotes(){
    this._httpService.getNotes()
      .then(allNotes => {
        console.log('Got Notes', allNotes);
        this.notes = allNotes;
      })
      .catch(error => console.log('Error getting allNotes', error));
  }

}
