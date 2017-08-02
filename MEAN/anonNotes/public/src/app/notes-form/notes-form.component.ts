import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { Note } from '../note';

@Component({
  selector: 'app-notes-form',
  templateUrl: './notes-form.component.html',
  styleUrls: ['./notes-form.component.css']
})
export class NotesFormComponent implements OnInit {
  @Output() newNoteEmitter = new EventEmitter();

  note: Note = new Note();

  constructor(private _httpService: HttpService) { }

  onSubmit(event){
    event.preventDefault();
    console.log('Submitting Note', this.note);
    this.newNoteEmitter.emit(this.note);
    this.note = new Note();
  }

  ngOnInit() {
  }

}
